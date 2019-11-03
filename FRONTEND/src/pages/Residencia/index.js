import React, { Link } from 'react';
import { H1Styled, Input, Button } from './styles';

function Main() {
  return (
    <>
      <H1Styled>Adicionar nova residência</H1Styled>
      <Input name="name" placeholder="Nome da casa" />
      <Input name="logradouro" placeholder="Nome da rua" />
      <Input name="numero" placeholder="Número da casa" />

      <Button>Inserir</Button>
    </>
  );
}

export default Main;
