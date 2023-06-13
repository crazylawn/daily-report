import React, { useCallback, ReactElement } from 'react';
import tw, { styled } from 'twin.macro';
import { css } from '@emotion/react';
import { SVGS } from 'src/icons';

export interface MemoPadProps {
  bg: any;
  content?: string;
  done?: boolean;
  onToggle?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onRemove?: () => void;
}

const MemoPad = ({
  bg,
  content,
  done,
  onToggle,
  onChange,
  onRemove,
  ...props
}: MemoPadProps) => {
  return (
    <MemoWrapper bg={bg} {...props}>
      <div>
        <ImageWrapper>
          <CheckCircle done={done} onClick={onToggle}>
            {done && <SVGS.CHECK_BUTTON />}
          </CheckCircle>
          <SVGS.X_BUTTON onClick={onRemove} />
        </ImageWrapper>
        {done ? (
          <MemoTextArea
            bg={bg}
            onChange={onChange}
            value={content}
            done={done}
            readOnly
          />
        ) : (
          <MemoTextArea
            bg={bg}
            onChange={onChange}
            value={content}
            done={done}
          />
        )}
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
const MemoTextArea = styled.textarea<{ bg?: any; done?: boolean }>(
  ({ bg, done }) => [
    tw`
h-full
w-full
outline-none
resize-none
`,
    css`
      background-color: ${bg};
    `,
    done
      ? css`
          text-decoration: line-through;
        `
      : css`
          text-decoration-line: none;
        `,
  ],
);

const ImageWrapper = tw.div`
flex
justify-end
cursor-pointer
`;

const CheckCircle = styled.div<{ done?: boolean }>([
  tw`
  flex
  items-center
  justify-center
  w-9
  h-9
  rounded-2xl
  border-2
  border-solid
  cursor-pointer
  `,
  ({ done }) =>
    done
      ? css`
          border-color: blue;
          color: blue;
          & svg {
            fill: blue;
          }
        `
      : css`
          border-color: white;
          color: white;
        `,
]);

export default MemoPad;
