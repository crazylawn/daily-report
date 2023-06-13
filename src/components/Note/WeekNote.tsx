import React, { useMemo, useState } from 'react';
import tw, { styled, css } from 'twin.macro';
import CustomTable from '@components/Table/CustomTable';
const WeekNote = () => {
  // const [row, setRow] = useState<number>(2);
  // const [col, setCol] = useState<number>(4);
  // const weekDataList = Array.from(Array(row), () => Array(col).fill(null));
  const WeekItem = () => {
    return (
      <div className="flex border-2 bg-blue-500">
        <div className="border-2">월</div>
        <div>
          <input />
        </div>
      </div>
    );
  };

  const hour = useMemo(
    () =>
      Array(12)
        .fill(null)
        .map((_, index) => ({
          hourData: index + 1,
        })),
    [],
  );

  return (
    <LineNoteWrapper>
      {/* <div>{weekDataList}</div> */}
      {/* <CustomTable columns={columns} data={data} /> */}
    </LineNoteWrapper>
  );
};

const LineNoteWrapper = tw.div`
relative	
w-full
h-full
bg-white

`;

const WeekItem = tw.div`
w-24
h-24
bg-blue-500
border-4
`;
export default WeekNote;
