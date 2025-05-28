import mongoose from "mongoose";

const student = new mongoose.Schema({
    fullname : String,
    fathername : String,
    phoneno : Number,
    dateofberth : String,
    classname : String
})

export const studentmodle = mongoose.model("students", student)
