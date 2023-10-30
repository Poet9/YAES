// import use type from the model
import { user } from "@/types/types";
// the actual code to sign in goes in this function
const signIn = async (email: string, password: string) => {
    const user = {
        email: "",
        name: "",
    };
    try {
        //call fetch with GET to look for user
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
        //call fetch with POST to create a user
    } catch (err: any) {
        console.log({ error: err.message });
    }

    // return promise
    return newUser;
};

export { signIn, signUp };
