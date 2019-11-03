import React from 'react';
import {
  H1Styled,
  Select,
  Button,
  Container,
  ContainerContainer,
} from './styles';
import { Link } from 'react-router-dom';

function Comodo() {
  return (
    <>
      <Container>
        <H1Styled>Adicionar atuador</H1Styled>
        <Select />
      </Container>

      <Link to="/sensor">
        <Button>OK</Button>
      </Link>
    </>
  );
}

export default Comodo;
