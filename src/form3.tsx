import React from 'react';
import { useFormik } from 'formik';
import './style/style3.css'
const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      nome: '',
      email: '',
      telefone: '',
    },
    onSubmit: (values) => {
      console.log('Dados do formulário:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
     <h2>Formulário:</h2>
      <div className='nome'>
        <label htmlFor="nome">Nome:</label><br />
        <input
          type="text"
          id="nome"
          name="nome"
          onChange={formik.handleChange}
          value={formik.values.nome}
        />
      </div>

      <div className='email'>
        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>

      <div className='tele'>
        <label htmlFor="telefone">Telefone:</label><br />
        <input
          type="tel"
          id="telefone"
          name="telefone"
          onChange={formik.handleChange}
          value={formik.values.telefone}
        />
      </div>

      <button id='botão' type="submit">Enviar</button>
    </form>
  );
};

export default Form;