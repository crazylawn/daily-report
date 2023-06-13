import React, { useMemo } from 'react';
import tw, { styled, css } from 'twin.macro';
import CustomTable from '@components/Table/CustomTable';
const TableNote = () => {
  const columnData = [
    {
      accessor: 'weekName', //data 랑 매칭되는 컬럼이름
      Header: 'Name',
    },
    {
      accessor: 'weekCode',
      Header: 'Code',
    },
  ];
  const columns = useMemo(() => columnData, []);
  const data = useMemo(
    () => [
      {
        weekName: '월',
        weekCode: 'MJ2022',
      },
      {
        weekName: '화',
        weekCode: 'MJ2022',
      },
    ],
    [],
  );

  return (
    <LineNoteWrapper>
      <CustomTable data={data} columns={columns} />
    </LineNoteWrapper>
  );
};

const LineNoteWrapper = tw.div`
relative	
w-full
h-full
bg-white

`;

export default TableNote;
