import mongoose from "mongoose";
const Schema = mongoose.Schema;

const adminCommentSchema = new Schema({
    comment: {
        type: String
    }
})

export default mongoose.model("AdminComment", adminCommentSchema);