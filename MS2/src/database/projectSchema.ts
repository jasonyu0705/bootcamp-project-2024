import mongoose, { Schema } from "mongoose";

// typescript type (can also be an interface)
export type Project = {
		title: string;
	  skills: string; 
		content1: string;
		content2: string;
};


// mongoose schema 
const projectSchema = new Schema<Project>({
		title: { type: String, required: true },
		skills: { type: String, required: true },
		content1: { type: String, required: true },
		content2: { type: String, required: true }
})

// defining the collection and model
const Projectimp = mongoose.models['projects'] ||
    mongoose.model('projects', projectSchema);

export default Projectimp;


