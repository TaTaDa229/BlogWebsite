import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  title: { type: String, require: true },
  description: { type: String, require: true },
  name: { type: String, require: true },
  creator: { type: String, require: true },
  tags: { type: [String], require: true },
  imageFile: { type: String},
  createdAt: { 
    type: Date,
    default: new Date(),
    require: true 
 },
 likes: {
    type: [String],
    default: []
 }
});

export default mongoose.model("Blog", blogSchema);
