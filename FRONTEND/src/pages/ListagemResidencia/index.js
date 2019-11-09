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
  
  handleRemove = (id) => {
    api.post(`/residencia/remove/${id}`)
    .then(response => {
        if (response.data.residencia != null) {
          let residencias = this.state.residencias.filter((residencia) => residencia.id != id);
          this.setState({ residencias: residencias});
        }
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
                <h2>{residencia.nome}</h2>
                <h2>{residencia.logradouro}</h2>
                <h2>{residencia.numero}</h2>
              </Link>
              <button>Editar</button>
              <button onClick={() => this.handleRemove(residencia.id)}>Remover</button>
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
