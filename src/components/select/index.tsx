import React from 'react';

export interface SelectProps {
  optionData: any;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filter: string;
}
const Select = ({ optionData, filter, onChange }: SelectProps) => {
  return (
    <select value={filter} onChange={onChange}>
      {optionData.map((op: string, i: number) => {
        return (
          <option key={i + op} value={op}>
            {op}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
