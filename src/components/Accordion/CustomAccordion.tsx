import React, { useState, useRef } from 'react';
import tw, { styled } from 'twin.macro';
import { SVGS } from '@icons';
export interface CustomAccordion {
  title: string;
  content: string;
}

const CustomAccordion = ({ title, content }: CustomAccordion) => {
  const [setActive, setActiveState] = useState('');
  const [setHeight, setHeightState] = useState('0px');
  const [setRotate, setRotateState] = useState(`${AccordionIcon}`);

  const contentRef = useRef<any>(null);
  function toggleAccordion() {
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(
      setActive === 'active' ? '0px' : `${contentRef.current.scrollHeight}px`,
    );
    setRotateState(setActive === 'active' ? `${AccordionIcon}` : `${Rotate}`);
  }
  return (
    <AccordionSection>
      <Accordion className={`${setActive}`} onClick={toggleAccordion}>
        <AccordionTitle>{title}</AccordionTitle>
        <div className={`${setRotate}`}>
          <SVGS.ARROW_BOTTOM />
        </div>
      </Accordion>

      <AccordionContent ref={contentRef} style={{ maxHeight: `${setHeight}` }}>
        <AccordionText dangerouslySetInnerHTML={{ __html: content }} />
      </AccordionContent>
    </AccordionSection>
  );
};

const AccordionSection = tw.div`
flex
flex-col
`;

const Accordion = styled.button`
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  transition: background-color 0.6s ease;
  &:hover {
    background-color: #ccc;
  }
`;

const AccordionTitle = tw.p`
font-semibold
text-sm
text-left
flex-1
`;
const AccordionIcon = styled.div`
  margin-left: auto;
  transition: transform 0.6s ease;
`;

const Rotate = styled.div`
  transform: rotate(90deg);
`;
const AccordionContent = styled.div`
  background-color: white;
  overflow: auto;
  transition: max-height 0.6s ease;
`;

const AccordionText = tw.div`
font-normal
text-xs
p-5
h-80
`;

export default CustomAccordion;
