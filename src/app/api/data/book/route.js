import { dbConnect } from "@/dbConfig/dbConfig";
import Trade from "@/models/tradeModel";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

await dbConnect();

export async function GET(req) {
    try {
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        const id = token._id;
        const trades = await Trade.find({ userId: id });
        return NextResponse.json({ message: trades }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}

