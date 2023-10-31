import nextAuth from "next-auth";
declare module 'next-auth'{
    interface Session {
        user:{
            email: string;
            name: string;
            firstName: string;
            password: string;
            birthDate: Date;
            accessToken: string;
        }
    }
}