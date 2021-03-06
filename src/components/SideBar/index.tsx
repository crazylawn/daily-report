import React, { useState, useEffect, useRef } from 'react';
import tw, { styled } from 'twin.macro';

export interface SideBarProps {
  width: any;
  height?: any;
  children: any;
}

export const Sidebar = ({ width, height, children }: SideBarProps) => {
  const [xPosition, setX] = useState<number>(-width);
  const [isOpen, setOpen] = useState(false);
  const side = useRef<any>();
  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };
  const handleClose = async (e: any) => {
    let sideArea = side.current;
    let sideCildren = side.current.contains(e.target);
    if (isOpen && (!sideArea || !sideCildren)) {
      await setX(-width);
      await setOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  }, []);
  return (
    <React.Fragment>
      <SideBarWrapper
        ref={side}
        style={{
          transform: `translatex(${-xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <SideButton onClick={() => toggleMenu()}>
          {isOpen ? <ToggleMenuBar /> : <ToggleMenuBar />}
        </SideButton>

        <div className="h-full">{children}</div>
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

const ToggleMenuBar = styled.button`
  height: 50px;
  border-top-left-radius: 10rem;
  border-bottom-left-radius: 9rem;
  width: 10px;
  position: absolute;
  outline: none;
  z-index: 1;
  background-color: rgba(64, 194, 133, 0.693);
  border-color: rgba(64, 194, 133, 0.693);
  border-left: 0;
  top: 53%;
  margin-left: -10px;
`;

const SideButton = styled.div``;
