import React from "react";

function Form({
    id,
    children,
    name,
    className,
    submit,
    ...props
}: {
    className: string;
    id: string;
    name: string;
    submit: (e: any) => void;
    children: React.ReactNode;
}) {
    return (
        <form id={id} name={name} onSubmit={submit} className={`block w-full ${className || ""}`}>
            {children ? children : null}
        </form>
    );
}

export default Form;
