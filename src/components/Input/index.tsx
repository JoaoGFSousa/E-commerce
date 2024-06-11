import { forwardRef, use, useState } from "react";
import * as S from "./input.style";
import { Box, Tooltip } from "@chakra-ui/react";
import { BsInfoCircleFill } from "react-icons/bs";

export interface iInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, iInputProps>(
  ({ variant, placeholder, error, ...rest }, ref) => {
    const [value, setValue] = useState("");
    const handleValue = (e: any) => setValue(e.target.value);
    return variant === "float" ? (
      <S.InputBox value={value} error= {error || ""}>
        <label>{placeholder}</label>
        <S.Input onKeyUp={handleValue} variant={variant} ref={ref} {...rest} />
        {error && (
        <Tooltip hasArrow label={error} bg="red.600" >
          <Box pos="absolute" 
          right="0" 
          top="50%" 
          transform="translateY(-50%)"
          mr="1rem"
          color="red.600"
          >
            <BsInfoCircleFill />

          </Box>
          
        </Tooltip>
        )}
        <span />
      </S.InputBox>
    ) : (
      <S.Input ref={ref} {...rest} />
    );
  }
);

Input.displayName = "Input";

export default Input;
