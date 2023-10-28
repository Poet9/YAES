import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(function textInput(
    { type = "text", label, name, id, className, ...props },
    ref
) {
    return (
        <input
            type={type}
            name={name}
            id={id}
            ref={ref}
            className={`px-6 py-4 text-base rounded-md border-2 focus:border-grey-500 ${
                className || ""
            }`}
            {...props}
        />
    );
});
