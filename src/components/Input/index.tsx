import { forwardRef, use, useState } from "react";
import * as S from "./input.style";




export interface iInputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    variant?: string;
}

const Input = forwardRef<HTMLInputElement, iInputProps>(
    ({ variant, placeholder, ...rest }, ref) => {
        const [value, setValue] = useState("");
        const handleValue = (e: any) => setValue(e.target.value);
        return variant === "float" ? (
            <S.InputBox value={value}>
                <label>{placeholder}</label>
                <S.Input onKeyUp={handleValue} variant={variant} ref={ref} {...rest} />
                <span />
            </S.InputBox>
        ) : (
            <S.Input ref={ref} {...rest} />
        );
    }
);

Input.displayName = "input";

export default Input;