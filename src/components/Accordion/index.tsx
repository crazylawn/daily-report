import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
interface DataType {
  year: string;
  main: string;
}
export const Data: Array<DataType> = [
  {
    year: '2021',
    main: '2021에 일어난 일',
  },
  {
    year: '2020',
    main: '2020에 일어난 일',
  },
  {
    year: '2019',
    main: '2019에 일어난 일',
  },
];

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const onTitleClick = (idx: number): any => {
    setActiveIndex(idx);
  };
  return (
    <YearWrapper>
      <YearAll>
        {Data.map((datum, idx) => {
          const active = idx === activeIndex ? 'active' : '';
          return (
            <AccordionYear
              className={
                `accordion-year ${active}` +
                (activeIndex !== idx ? 'text-gray-500 ' : 'text-black')
              }
              key={idx}
              role="presentation"
              onClick={() => onTitleClick(idx)}
            >
              <div className="mb-7"> {datum.year}</div>
            </AccordionYear>
          );
        })}
      </YearAll>
      {/* <div className="ml-20 flex-1  border-t border-solid border-current"> */}
      <YearContent>
        {Data.map((datum, idx) => {
          const active = idx === activeIndex ? 'active' : '';
          return (
            <AccordionYear
              className={
                `accordion-year ${active}` +
                (activeIndex !== idx ? 'text-gray-500 ' : 'text-black')
              }
              key={idx}
              role="presentation"
              onClick={() => onTitleClick(idx)}
            >
              <div className="ml-20 flex  flex-1 border-t border-solid border-current">
                <div className="text-lg"> {datum.year}</div>
                <div className="ml-5">{datum.main}</div>
              </div>
            </AccordionYear>
          );
        })}
      </YearContent>
      {/* </div> */}
    </YearWrapper>
  );
};
const YearAll = tw.div`

`;
const YearContent = tw.div`
flex-1
`;
const AccordionYear = styled.div`
  position: relative;
  display: flex;
  border: 0;
  background-color: transparent;
  &:before,
  &:after {
    position: absolute;
    content: '';
    width: 50%;
    height: 2px;
    background-color: $color3;
    transition: $base-duration * 2 ease;
  }
  &:before {
  }
  &:after {
    transform: rotate(90deg);
  }
  &.is-active {
    &:before {
      transform: rotate(360deg);
    }
    &:after {
      transform: rotate(360deg);
      transition-delay: 0.08s;
    }
  }
`;

const YearWrapper = tw.div`
flex
flex-row
mr-7
ml-7
`;
