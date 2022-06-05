import React from 'react';

export interface MindmapControlProps {
  onNewNode: Function;
}
const MindmapControl = ({ onNewNode }: MindmapControlProps) => {
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
        <input />
        <button onClick={() => onNewNode()}>추가</button>
      </div>
    </div>
  );
};

export default MindmapControl;
