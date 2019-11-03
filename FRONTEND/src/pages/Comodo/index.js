import React from 'react';
import { H1Styled, Input, Button } from './styles';
import { Link } from 'react-router-dom';

function Comodo() {
  return (
    <>
      <H1Styled>Adicionar novo cômodo</H1Styled>
      <Input name="tipo" placeholder="Nome do cômodo" />

      <Link to="/projeto">
        <Button>Inserir comodo</Button>
      </Link>
    </>
  );
}

export default Comodo;
