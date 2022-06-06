import React, { ButtonHTMLAttributes } from 'react';
import { styled } from 'twin.macro';

export interface MindmapButtonProps {
  type: 'button' | 'submit' | 'reset' | undefined;
  label: string;
  content: string;
}

const MindmapButton = ({ type, label, content }: MindmapButtonProps) => {
  return (
    <ButtonBox type={type} label={label}>
      {content}
    </ButtonBox>
  );
};

const ButtonBox = styled.button<{ label: string }>`
  width: 196px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #898bff;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  border: none;
  border-radius: 3px;
  transition: 0.3s;
  :hover {
    background-color: #5d5fef;
  }
`;
export default MindmapButton;
