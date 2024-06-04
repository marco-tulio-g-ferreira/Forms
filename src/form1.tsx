
import React, { useState } from 'react';
import NameInput from './components(form1)/nome.tsx';
import EmailInput from './components(form1)/Email.tsx';
import PhoneInput from './components(form1)/celular.tsx';
import './style/style1.css'

  
const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleFormSubmit = () => {
    console.log('Dados do formulário:');
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Telefone:', phone);
  };

  return (
    <div>
      <h2>Formulário 1:</h2>
      <NameInput value={name} onChange={setName} />
      <EmailInput value={email} onChange={setEmail} />
      <PhoneInput value={phone} onChange={setPhone} />
      <button onClick={handleFormSubmit}>Enviar</button>
    </div>
  );
};






export default App;
