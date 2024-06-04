import React from 'react';
import { useForm } from 'react-hook-form';
import './style/style2.css'
interface IFormInput {
  nome: string;
  email: string;
  telefone: string;
}

const Form: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm<IFormInput>();
  
  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };
  
  
  const handleSetValues = () => {
    setValue('nome', 'Novo Nome'); 
    const emailValue = getValues('email'); 
    console.log('Valor do email:', emailValue);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>formulário 2:</h2>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input {...register('nome')} placeholder="Nome" />
        {errors.nome && <span>{errors.nome.message}</span>}
      </div>

      <div>
       
        <label htmlFor="email">Email:</label>
        <input{...register('email')} placeholder="Email" />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="telefone">Telefone:</label>
        <input {...register('telefone')} placeholder="Telefone"/>
        {errors.telefone && <span>{errors.telefone.message}</span>}
      </div>

      <button type="submit">Enviar</button>
      <button type="button" onClick={handleSetValues}>Definir Valores</button>
    </form>
  );
};

export default Form;