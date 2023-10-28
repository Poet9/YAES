"use client";

import Modal from "@/components/modal";
import { Input } from "@/components/input";
import { useState } from "react";
import Form from "@/components/form";

export default function Sign() {
    const [hiddenModal, sethiddenModal] = useState(true);
    const [logType, setlogType] = useState("sign-in");
    const handleSubmit = (e: any) => {};
    return (
        <>
            <button
                className="p-4 border-2 bg-rose-500"
                onClick={() => sethiddenModal(false)}
            ></button>
            <Modal
                title="trying it"
                id="123540"
                hidden={hiddenModal}
                onClose={() => sethiddenModal(true)}
            >
                <Form id="signIn" name={logType} submit={handleSubmit}>
                    <Input
                        label="email"
                        id="email"
                        type="email"
                        placeholder="example@gmail.com..."
                        className="w-full"
                        autoFocus
                    />
                    {logType === "sign-up" && (
                        <div className="">
                            <Input
                                id="firstNameSignUp"
                                type="text"
                                placeholder="first-name..."
                                className="w-full"
                                autoFocus
                            />
                            <Input
                                id="username"
                                type="text"
                                placeholder="first-name..."
                                className="w-full"
                                autoFocus
                            />
                        </div>
                    )}
                    <Input
                        label="password"
                        type="password"
                        placeholder="type your password..."
                        min={8}
                        className="w-full"
                        autoFocus
                    />
                </Form>
            </Modal>
        </>
    );
}
