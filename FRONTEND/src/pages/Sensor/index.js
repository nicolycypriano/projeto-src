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
        <H1Styled>Adicionar sensor</H1Styled>
        <Select />
      </Container>

      <Link to="/projeto">
        <Button>OK</Button>
      </Link>
    </>
  );
}

export default Comodo;
