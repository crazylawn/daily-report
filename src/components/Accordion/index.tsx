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
    <YearAll>
      {Data.map((datum, idx) => {
        const active = idx === activeIndex ? 'active' : '';

        return (
          <AccordionYear
            className={
              `accordion-year ${active}` +
              (activeIndex !== idx ? UnclickedYear : ClickedYear)
            }
            // className={
            //   `accordion-year ${active}` +
            //   (activeIndex !== idx ? UnclickedYear : ClickedYear)
            // }
            role="presentation"
            onClick={() => onTitleClick(idx)}
          >
            {datum.year}
          </AccordionYear>
        );
      })}
    </YearAll>
  );
};
const YearAll = tw.div``;
const UnclickedYear = tw.div`
text-purple-500 
`;
const ClickedYear = tw.div`
text-pink-700 
`;
const AccordionYear = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
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
