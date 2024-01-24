import mongoose from "mongoose";
import { connection } from "../../middlwware/mongoose"
import { NextResponse } from "next/server";

export default async function GET(req,res){
    await mongoose.connect(connection)
    res.status(200).json({success:'success' })
    // return NextResponse.json({connect:true})
}