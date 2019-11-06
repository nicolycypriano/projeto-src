import React, { Component } from 'react';
import {
  H1Styled,
  Select,
  Button,
  Content,
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

      <Content>
        <H1Styled>Residências</H1Styled>
        <ul>
          {this.state.residencias.map((residencia) =>
            <li key={residencia.id}>
              <Link to={`/comodo/list/${residencia.id}`}>
                {`Nome da residência: ${residencia.nome}`} - {`Nome da rua: ${residencia.logradouro}`} - {`Número da rua: ${residencia.numero}`}
              </Link>
              <button>Adicionar</button>
            </li>
          )
            ||
            <li>Nenhuma residência cadastrada!</li>}

          <Link to="/residencia">
            <Button>Cadastrar nova residência</Button>
          </Link>
        </ul>



      </Content>

    );
  }
}

export default ListagemResidencia;
