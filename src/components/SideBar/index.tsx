import React, { useState, useEffect } from 'react';
import tw, { styled } from 'twin.macro';

export interface SideBarProps {
  width: any;
  height: any;
  children: any;
}

export const Sidebar = ({ width, height, children }: SideBarProps) => {
  const [xPosition, setX] = useState<Number>(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };
  useEffect(() => {
    setX(0);
    return () => {};
  }, []);
  return (
    <React.Fragment>
      <SideBarWrapper
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <ToggleMenu
          onClick={() => toggleMenu()}
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        ></ToggleMenu>
        <div className="content">{children}</div>
      </SideBarWrapper>
    </React.Fragment>
  );
};
const SideBarWrapper = styled.div`
  height: 100% !important;
  display: flex;
  flex-direction: column;
  border-right: 1px solid;
  border-radius: 0;
  border-color: rgba(64, 194, 133, 0.693);
  background-color: rgb(255, 255, 255);
  transition: 0.8s ease;
`;

const ToggleMenu = styled.button`
  height: 50px;
  border-top-right-radius: 10rem;
  border-bottom-right-radius: 9rem;
  width: 10px;
  position: absolute;
  outline: none;
  z-index: 1;
  background-color: rgba(64, 194, 133, 0.693);
  border-color: rgba(64, 194, 133, 0.693);
  border-left: 0;
`;
