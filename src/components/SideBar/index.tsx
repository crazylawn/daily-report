import './Sidebar.css';
import React from 'react';

export interface SideBarProps {
  width: any;
  height: any;
  children: any;
}

export const Sidebar = ({ width, height, children }: SideBarProps) => {
  return (
    <div className="side-bar" style={{ width: width, minHeight: height }}>
      <React.Fragment>{children}</React.Fragment>
    </div>
  );
};
