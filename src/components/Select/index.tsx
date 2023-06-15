import React from 'react';

type selectList = {
  label: string;
  value: number;
};
export interface SelectProps {
  optionData: selectList[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  filter: string;
}
const Select = ({ optionData, filter, onChange }: SelectProps) => {
  return (
    <select value={filter} onChange={onChange}>
      {optionData.map((op, i) => {
        return (
          <option key={i + op.label} value={op.value}>
            {op.label}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
