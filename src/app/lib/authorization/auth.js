import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "./zod";
import { User } from "../models";

export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          let user = null;

          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          // hashedpassword to increasing security
          const salt = await bcrypt.genSalt(10);
          const saltAndHashPassword = await bcrypt.hash(password, salt);

          // logic to verify if user exists
          user = await User.findOne({email, saltAndHashPassword});

          if (!user) {
            throw new Error("User not found.");
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            return null;
          }
        }
      },
    }),
  ],
});
