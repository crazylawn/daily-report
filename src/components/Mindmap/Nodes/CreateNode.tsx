import React, { useState, useCallback } from 'react';
import { styled } from 'twin.macro';
import InputBox from '@components/InputBox';

const CreateNode = () => {
  const [isFirst, setIsFirst] = useState();
  const [newNode, setNewNode] = useState<string>('');
  const onChangeNewNode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewNode(e.target.value);
    },
    [newNode],
  );
  return (
    <div>
      {isFirst ? (
        <FormBox>
          <InputBox
            type="text"
            placeholder="새로운 노드 만들기"
            value={newNode}
            onChange={() => onChangeNewNode}
          />
        </FormBox>
      ) : (
        <FormBox></FormBox>
      )}
    </div>
  );
};

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    border-radius: 3px;
    background-color: #f6f6f6;
    box-shadow: inset 0 0 2px #00000040;
    padding: 6px;
    margin: 5px 0;
    width: 180px;
    min-height: 15px;
    text-align: left;
    cursor: pointer;
  }
`;
export default CreateNode;
