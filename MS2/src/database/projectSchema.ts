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
export type Project = {
		title: string;
	  skills: string; 
		content1: string;
		content2: string;
		comments :IComment[];
};


// mongoose schema 
const projectSchema = new Schema<Project>({
		title: { type: String, required: true },
		skills: { type: String, required: true },
		content1: { type: String, required: true },
		content2: { type: String, required: true },
		comments: [commentSchema],

})

// defining the collection and model
const Projectimp = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

export default Projectimp;


