import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"// changed from helpers to database
import blogSchema from "@/database/blogSchema"

type IParams = {
		params:Promise<{
			slug: string
		}>;
}

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: IParams) {
    await connectDB() // function from db.ts before
	const slug  =await params;
	   try {
	        const blog = await blogSchema.findOne({ slug }).select("comments").orFail();
	        return NextResponse.json(blog)
	    } catch (err) {
	        return NextResponse.json('Blog not found.', { status: 404 })
	    }
}
//connects to database and posts required info if given, otherwise sends out error request
export async function POST(req: NextRequest, { params }: IParams) {//<--what does this do oh nvm refers to above
	await connectDB()
	const resparams  =await params;

	//ask why you cannot do it like this 
	//const {resparams}  = params; <-- sorta makes sense 

	try {
		const body = await req.json();// awaits the json request
		const {user, comment}=body;// extracts user and comment from the body
		//quries the bloc collections and looks for a blog with a slug that matches the slug of the resolved parameters
		// orFail makes sure that it throws an error
		const blog= await blogSchema.findOne({slug: resparams.slug}).orFail();
		//makes a new comment using a user comment and time input
		const newcomment={
			user,
			comment,
			time:new Date(),
		};
		//pushing the new comment into the comments array for that suecific blog
		// note that comments is the array of comments in a blog
		blog.comments.push(newcomment);
		// returns a next responce 
		return NextResponse.json(newcomment);

	} catch (error) {
		// send a resoponce saying that the comment was not added and set an error status
		return NextResponse.json(
			{error:"Failed to add comment"},
			{status:440}
		)
	}
}
