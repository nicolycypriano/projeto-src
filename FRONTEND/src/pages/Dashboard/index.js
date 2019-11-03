import React from 'react';
import { H1Styled, Input } from './styles';

function Main() {
  return (
    <>
      <H1Styled>Adicionar nova residência</H1Styled>
      <Input name="name" />
      <Input name="logradouro" />
      <Input name="numero" />
    </>
  );
}

export default Main;
