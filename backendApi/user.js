import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  lostAmount: {
    type: String,
    enum: [
      "Less than $5,000",
      "$5,000 - $10,000",
      "$10,000 - $20,000",
      "$20,000 - $40,000",
      "$40,000 - $80,000",
      "$80,000 - $100,000",
      "$100,000 - $150,000",
      "Over $150,000",
    ],
  },
  description: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", UserSchema);