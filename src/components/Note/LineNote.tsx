import React, { useMemo } from 'react';
import tw, { styled, css } from 'twin.macro';
const LineNote = () => {
  const grayLineList = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => (
        // <LineBox>
        <GrayLine key={i} />
        // </LineBox>
      )),
    [],
  );
  return (
    <LineNoteWrapper>
      <>
        <PointLine />
        {grayLineList}
      </>
    </LineNoteWrapper>
  );
};

const LineNoteWrapper = tw.div`
relative	
w-full
h-full
bg-white

`;

// const LineBox = tw.div`
// `;

const GrayLine = styled.input(({}) => [
  tw`
  w-full
   border-b-2
   py-1
   outline-none
  `,
  css`
    /* width: -moz-available; */
  `,
]);

// const GrayLine = tw.input`
// // w-full
// border-b-2
// py-1
// outline-none
// `;

const PointLine = tw.div`
absolute
w-full
h-full
border-red-400
border-l-2



`;
export default LineNote;
