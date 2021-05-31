import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "your name" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (
          credentials.username === "bruno" &&
          credentials.password == "1234"
        ) {
          return Promise.resolve({ name: "bruno", email: "cool@password.lol" });
        }
        return null;
      },
    }),
  ],

  secret: process.env.SECRET,
});
