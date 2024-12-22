import mongoose, { Schema } from "mongoose";

export type IComment = {
	user: string;
	content: string;
	time: Date;
}
const commentSchema = new Schema<IComment>({
    user: {type: String, required: true},
    content: {type: String, required: true},
    time: { type: Date, required: true, default: new Date()}
})

// typescript type (can also be an interface)
export type Blog = {
		title: string;
        date: Date;
	    slug: string; 
		description: string; // for preview
	  image: string; // url for string in public
	  image_alt: string; // alt for image
	  comments :IComment[];
};

// mongoose schema 
const blogSchema = new Schema<Blog>({
		title: { type: String, required: true },
        date: { type: Date, required: false, default: new Date()},
        description: { type: String, required: true },
		image: { type: String, required: true },
	    image_alt: { type: String, required: true },
		slug: { type: String, required: true },
		comments: [commentSchema],

})

// defining the collection and model
const Blogimp = mongoose.models['blogs'] ||
    mongoose.model('blogs', blogSchema);

export default Blogimp;