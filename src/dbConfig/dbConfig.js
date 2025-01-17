import mongoose from "mongoose";

export async function dbConnect() {
    try {
        console.log("Connecting to database");
        await mongoose.connect(process.env.DB_URL);
        const connection = mongoose.connection;
        connection.once("connected", () => {
            console.log("Connected to database");
        });
        connection.on("error", (error) => {
            console.log("Error connecting to database: ", error);
            process.exit();
        });
    } catch (error) {
        console.log("Error connecting to database: ", error);
    }
}