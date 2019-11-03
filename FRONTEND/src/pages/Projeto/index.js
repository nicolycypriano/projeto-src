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
      <ContainerContainer>
        <Container>
          <H1Styled>Adicionar atuador</H1Styled>
          <Select />
        </Container>

        <Container>
          <H1Styled>Adicionar sensor</H1Styled>
          <Select />
        </Container>
      </ContainerContainer>

      <Link to="/casa">
        <Button>OK</Button>
      </Link>
    </>
  );
}

export default Comodo;
