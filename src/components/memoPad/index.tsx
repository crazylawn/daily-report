import React, { useCallback, ReactElement } from 'react';
import tw, { styled } from 'twin.macro';
import { css } from '@emotion/react';
import { SVGS } from '@icons';

export interface MemoPadProps {
  bg: any;
  content?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onRemove?: () => void;
}

const MemoPad = ({
  bg,
  content,
  onChange,
  onRemove,
  ...props
}: MemoPadProps) => {
  return (
    <MemoWrapper bg={bg} {...props}>
      <div>
        <ImageWrapper onClick={onRemove}>
          <SVGS.X_BUTTON />
        </ImageWrapper>
        <MemoTextArea bg={bg} onChange={onChange} />
      </div>
    </MemoWrapper>
  );
};

const MemoWrapper = styled.div<{ bg?: any }>(({ bg }) => [
  tw`
  w-52
  h-52
  shadow-lg
  p-2
  m-2
  `,
  css`
    background-color: ${bg};
  `,
]);
const MemoTextArea = styled.textarea<{ bg?: any }>(({ bg }) => [
  tw`
h-full
w-full
outline-none
resize-none
`,
  css`
    background-color: ${bg};
  `,
]);

const ImageWrapper = tw.div`
flex
justify-end
cursor-pointer
`;
export default MemoPad;
