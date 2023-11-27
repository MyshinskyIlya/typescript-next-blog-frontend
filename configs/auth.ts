import type { AuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials"; // Логин и пароль
import { users } from "@/assets/users";

export const authConfig: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_SECRET!,
        }),
        Credentials({
            credentials: {
                email: { label: "Email:", type: "email", required: true },
                password: {
                    label: "Password:",
                    type: "password",
                    required: true,
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials.password) return null;

                //...Взаимодействие с Базой Данных (при её наличии)

                const currentUser = users.find(
                    (user) => user.email === credentials.email
                );

                // пароль стоит хешировать (bycrypto, jwt token)
                if (
                    currentUser &&
                    currentUser.password === credentials.password
                ) {
                    const { password, id, ...userWithoutPasswordAndId } =
                        currentUser;
                    return userWithoutPasswordAndId as User;
                }
                return null;
            },
        }),
    ],
};
