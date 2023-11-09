"use client";
import Modal from "@/components/modal";
import { Input } from "@/components/input";
import React, { useState, useRef } from "react";
import Form from "@/components/form";
import { useSession, signOut } from "next-auth/react";

import { signIn, signUp } from "./signFunc";

export default function Sign({ className = "", ...props }) {
    const [hiddenModal, sethiddenModal] = useState(true);
    const [logType, setlogType] = useState("sign-in");
    const [loading, setloading] = useState(false);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setloading(true);
        if (logType === "sign-in") {
            //write code to sign in
            const email = e.target.getElementsByTagName("input")[0].value;
            const password = e.target.getElementsByTagName("input")[1].value;

            signIn(email, password).then(() => {
                e.preventDefault();
                console.log({ username: email, password: password });
                signIn(email, password).then(() => {
                    setloading(false);
                });
            });
        } else if (logType === "sign-up") {
            // write code to sign up
            const inputs = e.target.getElementsByTagName("input");
            const user = {
                email: inputs[0].value,
                firstName: inputs[1].value,
                name: inputs[2].value,
                birthday: inputs[3].value,
                password: inputs[4].value,
                gender: true,
            };
            signUp(user)
                .then(() => console.log("from signin dot then", user))
                .then(() => {
                    setloading(false);
                })
                .then(() => {
                    signIn(user.email, user.password);
                });
        }
        // to mock waiting behavior
        setInterval(() => setloading(false), 10000);
    };
    const toggleLogType = () => {
        logType === "sign-up" ? setlogType("sign-in") : setlogType("sign-up");
    };

    const { data: session } = useSession();

    if (session?.user && session) {
        return (
            <>
                <button
                    className="px-2 border-1 text-white mx-1  bg-blue-500 hover:bg-blue-600 rounded-lg"
                    onClick={() => signOut()}
                >
                    SIGN OUT
                </button>
            </>
        );
    }
    return (
        <>
            <button
                className={`px-2 border-1 text-white mx-1 bg-blue-500 hover:bg-blue-600 rounded-lg ${className}`}
                onClick={() => sethiddenModal(false)}
            >
                SIGN IN
            </button>
            <Modal
                title="SIGN IN"
                id="123540"
                hidden={hiddenModal}
                onClose={() => sethiddenModal(true)}
            >
                <Form id="signIn" className="w-full" name={logType} submit={handleSubmit}>
                    <Input
                        label="email"
                        id="emailSignIn"
                        type="email"
                        placeholder="example@gmail.com..."
                        className="w-full"
                        autoFocus
                        required
                    />
                    {logType === "sign-up" && (
                        <div className="grid grid-cols-2 w-full">
                            <Input
                                id="firstNameSignUp"
                                type="text"
                                placeholder="first-name..."
                                className="col-span-2"
                                required
                            />
                            <Input
                                id="lastNameSignUp"
                                type="text"
                                placeholder="last-name..."
                                className="mr-1"
                                required
                            />
                            <Input
                                id="birthdaySignUp"
                                type="date"
                                placeholder="2000-01-01"
                                max="2010-12-31"
                                min="1950-01-01"
                                required
                            />
                        </div>
                    )}
                    <Input
                        id="passwordSignIn"
                        label="password"
                        type="password"
                        placeholder="type your password..."
                        minLength={8}
                        className="w-full"
                        required
                    />
                    <button
                        type="submit"
                        className="py-4 text-base rounded-md w-full bg-blue-400 hover:bg-blue-500 text-white "
                        disabled={loading}
                    >
                        {loading ? (
                            <p className="flex justify-center">
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 color-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>{" "}
                                processing...
                            </p>
                        ) : (
                            logType.toUpperCase()
                        )}
                    </button>
                </Form>
                <p>
                    first time?
                    <a
                        href="#"
                        onClick={toggleLogType}
                        className="text-blue-400 hover:text-blue-500"
                    >
                        {logType == "sign-in" ? "sign-up" : "sign-in"}
                    </a>
                </p>
            </Modal>
        </>
    );
}
