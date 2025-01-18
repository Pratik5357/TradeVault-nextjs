import { dbConnect } from "@/dbConfig/dbConfig";
import Trade from "@/models/tradeModel";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

await dbConnect();

export async function POST(req) {
    try {
        const reqBody = await req.json();
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        const id = token._id;
        
        if (!token) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
        }
        reqBody.userId = id;
        const newTrade = new Trade(reqBody);
        const savedTrade = await newTrade.save();
        console.log(savedTrade);

        return NextResponse.json({message:savedTrade}, {status: 200});


    } catch (error) {
        return NextResponse.json({ message: error.message }, {status: 500});
    }
}