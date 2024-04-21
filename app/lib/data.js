import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUser = async (q) => {
    // Set case insensitive
    const regex = new RegExp(q, "i");
    
    try{
        connectToDB();
        const users = await User.find({ username: {$regex: regex} });
        return users;
    } catch (err) {
        console.log(`Failed to fetch users: ${err}`);
    }
}