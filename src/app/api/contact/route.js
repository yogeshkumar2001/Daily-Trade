import dbConnect from "@/utils/connectDB";
import Contact from "@/model/userModel";
import { NextResponse } from "next/server";

export async function POST(req,res){
    try{
        await dbConnect();
        let resBody = await req.json();
        Contact.create(resBody);
        return NextResponse.json({
            message:"Message sent successfully"
        },{
            status:200
        })
    }catch(e){
        return NextResponse.json({
            message:"Server Error! Please try again letter"
        },{
            status:500
        })
    }

}