import React from 'react';

interface PhoneInputProps {
  value: string;
  onChange: (newValue: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="phone">Telefone:</label>
      <input
        type="tel"
        id="phone"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default PhoneInput;