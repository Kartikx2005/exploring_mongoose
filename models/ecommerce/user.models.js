import mongoose from 'mongoose';

new userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type : string,
    required: true
  }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema)