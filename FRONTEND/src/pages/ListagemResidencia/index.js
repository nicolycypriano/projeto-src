import React, { Component } from 'react';
import {
  H1Styled,
  Select,
  Button,
  Container,
  ContainerContainer,
} from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';

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
              <li key={elemento.id}>
                <Link to={`/comodo/list/${elemento.id}`}>
                  {`Nome da residência: ${elemento.nome}`} - {`Nome da rua: ${elemento.logradouro}`} - {`Número da rua: ${elemento.numero}`}
                </Link>
              </li>
            )
              ||
              <li>Nenhuma residência cadastrada!</li>}
          </ul>
        </Container>

        <Link to="/residencia">
          <Button>Cadastrar nova residência</Button>
        </Link>
      </>
    );
  }
}

export default ListagemResidencia;
