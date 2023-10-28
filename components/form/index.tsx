import React from "react";

function Form({
    id,
    children,
    name,
    submit,
    ...props
}: {
    id: string;
    name: string;
    submit: (e: any) => void;
    children: React.ReactNode;
}) {
    return (
        <form id={id} name={name} onSubmit={submit}>
            {children ? children : null}
        </form>
    );
}

export default Form;
