import React from "react";
interface EmailInputProps {
    value: string;
    onChange: (newValue: string) => void;
  }
  
  const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
    return (
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  };
  
  export default EmailInput;
  
  