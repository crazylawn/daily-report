import React, { useMemo, useRef } from 'react';
import tw, { styled, css } from 'twin.macro';
const NoLineNote = () => {
  return (
    <LineNoteWrapper>
      <WirelessArea />
    </LineNoteWrapper>
  );
};

const LineNoteWrapper = tw.div`
relative	
w-full
h-full
bg-white

`;

const WirelessArea = tw.textarea`
w-full
h-full
outline-none
resize-none
`;

export default NoLineNote;
