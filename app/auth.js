import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import { NextAuth } from "@/middleware";
import { authConfig } from "./authconfig";

const login = async (credentials) => {
    try {
        connectToDB();
        const user = await User.findOne({ username: credentials.username });
        if (!user || !user.isAdmin) {
            throw new Error("Wrong credentials!");
        } else {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
            if (!isPasswordCorrect) {
                throw new Error("Wrong credentials!");
            } else {
                return user;
            }
        }

    } catch (error) {
        console.log(`Failded to login. Error: ${error}`);
    }
}

export const { signIn, signOut, auth } = NextAuth({
    ...authConfig,
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    const user = await login(credentials);
                    return user;
                } catch (error) {
                    console.log(`Failded to login. Error: ${error}`);
                }
            }
        })
    ]
});