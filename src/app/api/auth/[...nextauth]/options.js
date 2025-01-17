import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import { dbConnect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await dbConnect();
                try {
                    const user = await User.findOne({
                        email: credentials.email
                    });

                    if (!user) {
                        throw new Error("No user found");
                    }

                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    if (!isPasswordCorrect) {
                        throw new Error("Incorrect password");
                    }

                    return user;
                } catch (err) {
                    throw new Error(err.message);
                }
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
            if (token) {
                session.user._id = token._id;
                session.user.username = token.username;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token._id = user._id.toString();
                token.username = user.username;
            }
            return token;
        }
    },
    pages: {
        signIn: "/sign-in"
    }
};