import React, { Component } from 'react';
import {
  H1Styled,
  Select,
  Button,
  Container,
  ContainerContainer,
  ContainerLi,
} from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

class ListagemResidencia extends Component {

  state = {
    residencias: []
  }

  componentDidMount() {
    api.get('/componentes/residencia')
      .then(response => {
        this.setState({ residencias: response.data.residencias });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Container>
          <H1Styled>Residências</H1Styled>
          <ul>
            {this.state.residencias.map((elemento) =>
                <Link to={`/comodo/list/${elemento.id}`}>
                  <ContainerLi>
                    <li key={elemento.id}>
                      <b>Código da residência:</b> {elemento.id} <br/> 
                      <b>Nome da residência:</b> {elemento.nome} <br/> 
                      <b>Nome da rua:</b> {elemento.logradouro} <br/> 
                      <b>Numero da rua</b> {elemento.numero} <br/>
                    </li>
                  </ContainerLi>
                </Link>
            )
              ||
              <li>Nenhuma residência cadastrada!</li>}
          </ul>
        </Container>

        <Link to="/residencia">
          <Button>Cadastrar nova residência</Button>
        </Link>


        <Link to="/">
          <Button>Sair</Button>
        </Link>
      </>
    );
  }
}

export default ListagemResidencia;
