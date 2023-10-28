import { forwardRef, useState, useEffect } from "react";
// local import
import { Input } from "./input";

type numberInputProps = Omit<
    React.ComponentPropsWithoutRef<typeof Input>,
    "onChange" | "value" | "type"
> & {
    value?: string | null;
    onChange?: (value: number | null) => void;
    integer?: boolean;
};
// function to parse input value
let parseNumber = (value: number | string | undefined): number | null => {
    if (typeof value === "string") {
        return isNaN(parseFloat(value)) ? null : parseFloat(value);
    }
    return value ?? null;
};
const floatRegex = /[^0-9.,]/g;
const integerRegex = /[^0-9]/g;
// function to process values
const processValue = (displayValue: string, integer: boolean) => {
    const regex = integer ? integerRegex : floatRegex;
    let inputVal = displayValue.replace(regex, ""); //removing unauthorized characters
    // Remove percentage for actual value.
    let vWithoutCommas = inputVal.replace(/,/g, "");
    let parsedValue = parseNumber(vWithoutCommas);
    return {
        displayValue: inputVal,
        value: parsedValue,
    };
};
const NumberInput = forwardRef<HTMLInputElement, numberInputProps>(function NumberIn(
    { value = null, onChange, integer = false, ...props },
    ref
) {
    const [displayValue, setDisplayValue] = useState(value?.toString() ?? "");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Remove invalid characters.
        const { displayValue, value: newValue } = processValue(e.target.value, integer);

        setDisplayValue(displayValue);
        onChange?.(newValue);
    };

    useEffect(() => {
        const { value: newValue } = processValue(displayValue, integer);

        // If the value has changed, update the display value.
        if (newValue !== value) {
            setDisplayValue(value?.toString() ?? "");
        }
    }, [value, displayValue, integer]);

    return <Input type="text" ref={ref} value={displayValue} onChange={handleChange} {...props} />;
});

export default NumberInput;
