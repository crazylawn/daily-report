import React, { useState, useCallback, useEffect } from 'react';
import { styled } from 'twin.macro';
import InputBox from '@components/InputBox';
import { useNode, useCurrentNodeId } from 'store/nodeStore';
import MindmapButton from '@components/Button/MindmapButton';

export interface CreateNodeProps {
  cyRef: any;
  onSaveGraph: () => void;
  inputType: string;
  onChangeNodeId: (value: string) => void;
  nodeId: string;
  onNodeClickHandler: (e: any) => void;
}
const CreateNode = ({
  cyRef,
  onSaveGraph,
  inputType,
  onChangeNodeId,
  nodeId,
  onNodeClickHandler,
}: CreateNodeProps) => {
  const [isFirst, setIsFirst] = useNode((state: any) => [
    state.default,
    state.setDefault,
  ]);
  const [newNode, setNewNode] = useState<string>('');
  const [newNodeId, setNewNodeId] = useCurrentNodeId((state: any) => [
    state.default,
    state.setDefault,
  ]);
  const onChangeNewNode = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNewNode(e.target.value);
    },
    [newNode],
  );
  const upNewNodeId = useCurrentNodeId((state: any) => state.default);

  // 노드 추가 이벤트
  const onNewCircle = (e: React.FormEvent<HTMLFormElement>) => {
    const item = {
      data: {
        id: newNodeId,
        label: newNode,
      },
      position: {
        x: 50,
        y: 600,
      },
    };
    e.preventDefault();
    cyRef.current.add(item);
    setNewNodeId(upNewNodeId);
    setNewNode('');
    onSaveGraph();
  };
  return (
    <div>
      {isFirst ? (
        <>
          <FormBox onSubmit={onNewCircle}>
            <InputBox
              type="text"
              placeholder="새로운 노드 만들기"
              value={newNode}
              name="newNode"
              onChange={onChangeNewNode}
            />
            <MindmapButton
              type="submit"
              label="add"
              content="추가"
            ></MindmapButton>
          </FormBox>
        </>
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
