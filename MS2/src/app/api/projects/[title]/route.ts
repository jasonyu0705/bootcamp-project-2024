import { NextRequest, NextResponse } from 'next/server'
import connectDB from "@/database/db"// changed from helpers to database
import projectSchema from "@/database/projectSchema"

type Props = {
		params:{
			title: string
		};
}
type PropsProm = {
	params:Promise <{
		title: string
	}>;
}

// If { params } looks confusing, check the note below this code block
export async function GET(req: NextRequest, { params }: Props) {
    await connectDB() // function from db.ts before
	const title = (await params).title;

	//const { slug } = params // slug is atribute of params
	//console.log('get blog slug                                    ',slug);
		//console.log('routing to:', slug);
	   try {
	        const project = await projectSchema.findOne({ title }).orFail()
			//console.log('get blog blog										',blog);
	        return NextResponse.json(project)
	    } catch (err) {
			console.log(err);
	        return NextResponse.json('project not found.', { status: 404 })
	    }
}
//connects to database and posts required info if given, otherwise sends out error request
export async function POST(req: NextRequest, { params }: PropsProm) {//<--what does this do oh nvm refers to above
	//console.log('params', req, params);
	await connectDB()
	const resparams  = await params;

	try {
		console.log('entering post request')
		const body = await req.json();// awaits the json request
		const {user, content}=body;// extracts user and comment from the body
		//console.log('USER  ',user)
		//console.log('COMMENT  ',user)
		//quries the bloc collections and looks for a blog with a slug that matches the slug of the resolved parameters
		// orFail makes sure that it throws an error
		const project= await projectSchema.findOne({title: resparams.title}).orFail();
		//makes a new comment using a user comment and time input
		const newcomment={
			user,
			content,
			time:new Date(),
		};
		//console.log('new comment                 ',newcomment)
		//console.log('blog ', blog, ' comments ', blog.comments);


		//pushing the new comment into the comments array for that suecific blog
		// note that comments is the array of comments in a blog
		project.comments.push(newcomment);
		//console.log('RETURNING THE RESPONSE  ',user)
		//saves change to database
		await project.save();
		//console.log("FINISHED SAVING");
		// returns a next responce 
		return NextResponse.json(newcomment);

	} catch (error) {
		// send a resoponce saying that the comment was not added and set an error status
		console.log("error           ", error)
		return NextResponse.json(
			
			{error:"Failed to add comment"},
			{status:440}
		)
	}
}
