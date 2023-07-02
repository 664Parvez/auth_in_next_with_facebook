import NextAuth from "next-auth/next";
import FacebookProvider from "next-auth/providers/facebook"

const FacebookAuth = NextAuth({
    providers: [
        FacebookProvider({
            clientId: "2169757573229808",
            clientSecret: "5a23d7de4446bcba709c1464d07ca8bd"
        })
    ]
})

export default FacebookAuth