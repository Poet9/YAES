// import use type from the model
import { user } from "@/types/types";
import { signIn as SignIn } from "next-auth/react";

// the actual code to sign in goes in this function
const signIn = async (email: string, password: string) => {
    const user = {
        email: email,
        name: password,
    };
    SignIn("credentials",{email: email, password: password, redirect: false, callbackUrl: '/'})
    try {
        
    } catch (err: any) {
        console.log({ error: err.message });
    }

    // return promise
    return user;
};
// the code to sign up goes in this function
const signUp = async (user: user) => {
    const newUser = {};
    try {
        const result: any = await fetch ("http://localhost:3000/api/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        
        body: JSON.stringify({
            email: user.email,
            password: user.password,
            birthDate: new Date(user.birthday),
            gender: true,
            name: user.name,
            firstName: user.firstName
        })
    })
    } catch (err: any) {
        console.log({ error: err.message });
    }

    // return promise
    return newUser;
};

export { signIn, signUp };
