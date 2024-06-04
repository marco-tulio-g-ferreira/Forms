import React from 'react';

interface NameInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        id="name"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default NameInput;