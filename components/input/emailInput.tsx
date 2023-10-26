import { forwardRef, useState, useEffect } from "react";
import { Input } from "./input";

type EmailInputProps = Omit<React.ComponentPropsWithoutRef<typeof Input>, "onChange" | "value"> & {
    onChange?: (value: string | null) => void;
    value?: string | null;
};
const validateEmail = (email: string) => {
    return email
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
const EmailInput = forwardRef<HTMLInputElement, EmailInputProps>(function Email(
    { value = null, onChange, ...props },
    ref
) {
    const [displayValue, setDisplayValue] = useState(value?.toString() ?? "");

    return <Input type="text" ref={ref} value={displayValue} onChange={() => {}} {...props} />;
});

export default EmailInput;
