import { dbConnect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

await dbConnect();

export async function POST(NextRequest) {
    try {
         // Establish database connection

        const reqBody = await NextRequest.json();
        const { username, email, password } = reqBody;

        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ message: "User already exists" }, {status:400});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({ message: "User created successfully" }, {status:201});

    } catch (error) {
        return NextResponse.json({ message: error.message }, {status: 500});
    }
}