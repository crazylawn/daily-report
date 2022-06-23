import React, { useMemo, useRef } from 'react';
import tw, { styled, css } from 'twin.macro';
const LineNote = () => {
  const noteInput = useRef<any>();
  const grayTitleInputList = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => (
        <GrayLine key={i} ref={noteInput} />
      )),
    [],
  );
  const grayContentInputList = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => (
        <GrayLine key={i} ref={noteInput} />
      )),
    [],
  );
  return (
    <LineNoteWrapper>
      <div className="flex flex-row">
        <div className="w-1/3">{grayTitleInputList}</div>
        <PointLine />
        <div>{grayContentInputList}</div>
      </div>
    </LineNoteWrapper>
  );
};

const LineNoteWrapper = tw.div`
relative	
w-full
h-full
bg-white

`;
const GrayLine = styled.input(({}) => [
  tw`
  w-full
   border-b-2
   py-1
   outline-none
  `,
  css``,
]);

const PointLine = tw.div`
absolute
left-24
// w-full
 h-full
border-red-400
border-l-2
`;
export default LineNote;
