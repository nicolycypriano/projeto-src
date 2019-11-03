import React, { Link } from 'react';
import { H1Styled, Input, Button } from './styles';

function Comodo() {
  return (
    <>
      <H1Styled>Adicionar novo cômodo</H1Styled>
      <Input name="tipo" placeholder="Nome do cômodo" />

      <Button>Inserir comodo</Button>
    </>
  );
}

export default Comodo;
