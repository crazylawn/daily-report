import React, { useState, useCallback } from 'react';
import CreateNode from './Nodes/CreateNode';
import { useNode } from 'store/nodeStore';

export interface MindmapControlProps {
  onNewNode: Function;
  cyRef: any;
}
const MindmapControl = ({ onNewNode, cyRef }: MindmapControlProps) => {
  const inputType = useNode((state: any) => [state.default, state.setDefault]);
  const [nodeId, setNodeId] = useState<string>('');

  const onSaveGraph = () => {
    localStorage.setItem('graphs', JSON.stringify(cyRef.current.json()));
  };
  const onChangeNodeId = useCallback(
    (value: string) => {
      setNodeId(value);
    },
    [nodeId],
  );
  // 노드 클릭 이벤트
  const onNodeClickHandler = useCallback(
    (e: any) => {
      const node = e.target;
      setNodeId(node.id());
    },
    [setNodeId],
  );

  return (
    <div className="h-full w-full">
      <div className="flex">
        <p>추가</p>
        <p>수정</p>
        <p>삭제</p>
      </div>
      <div className="flex">
        <p>원</p>
        <p>이어주는선</p>
      </div>
      <div className="flex flex-col">
        <CreateNode
          inputType={inputType}
          cyRef={cyRef}
          onSaveGraph={onSaveGraph}
          onChangeNodeId={(value: string) => onChangeNodeId(value)}
          nodeId={nodeId}
          onNodeClickHandler={(e: any) => onNodeClickHandler(e)}
        />
      </div>
    </div>
  );
};

export default MindmapControl;
