import React from 'react';
import { styled } from 'twin.macro';

export interface InputBoxProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: () => void;
  name?: string;
  onFocus?: any;
  readOnly?: boolean;
  hidden?: boolean;
  refs?: string;
  height?: string;
}
const InputBox = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  onFocus,
  readOnly,
  hidden,
  refs,
  height,
}: InputBoxProps) => {
  return (
    <NodeInputBox
      type={type}
      placeholder={placeholder}
      name={name || ''}
      value={value || ''}
      onChange={onChange}
      onFocus={onFocus || null}
      readOnly={readOnly}
      hidden={hidden}
      ref={refs}
      height={height}
    ></NodeInputBox>
  );
};

const NodeInputBox = styled.input`
  width: ${(props) => (props.height ? props.height : '179px')};
  height: ${(props) => (props.height ? props.height : '26px')};
  background-color: #f6f6f6;
  box-shadow: inset 0 0 2px #00000040;
  margin: 0 auto 12px auto;
  border: none;
  border-radius: 3px;
  :focus {
    box-shadow: inset 0 0 2px #383838;
  }
`;
export default InputBox;
