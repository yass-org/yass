import { ChangeEventHandler } from "react";

export interface TextInputProps {
  id?: string;
  testId?: string;
  handleOnChange?: ChangeEventHandler<HTMLInputElement>;
}

const TextInput = ({ id, testId, handleOnChange }: TextInputProps) => {
  return (
    <input
      type="text"
      onChange={handleOnChange}
      id={id}
      data-testid={testId}
      className={[
        "font-weight:normal",
        "font-size:9",
        "padding-inline:3",
        "padding-block:4",
      ].join(" ")}
    />
  );
};

export default TextInput;
