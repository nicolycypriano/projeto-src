import React, { Component } from 'react';
import {
  H1Styled,
  Select,
  Button,
  Content,
} from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';

class Componentes extends Component {

  state = {
    sensores: [],
    atuadores: []
  }

  componentDidMount() {
    api.get(`/componentes/comodo/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ sensores: response.data.sensores, atuadores: response.data.atuadores });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChecar = (id) => {
    api.post(`/sensor/acionar/${id}`)
    .then(response => {
        let sensor = this.state.sensores.filter((sensor) => sensor.id == id);
        sensor.valor =  response.data.valor;
        console.log(sensor);

        this.setState({ sensores: response.data.sensores, atuadores: response.data.atuadores });
    })
    .catch(function (error) {
      console.log(error);
    });   
  }


  handleRemove = (id) => {
    console.log(id)
    api.post(`/sensor/remove/${id}`)
    .then(response => {
        let sensores = this.state.sensores.filter((sensor) => sensor.id != id);
        this.setState({ sensores: sensores});
    })
    .catch(function (error) {
      console.log(error);
    });   
  }

  render() {
    return (
      <Content>
        <H1Styled>Sensores</H1Styled>
        <ul>
          {this.state.sensores.map((sensor) =>
            <li key={sensor.id}>
              <h2>{sensor.nome}</h2>
              <h2>{sensor.categoria}</h2>
              <h2>{sensor.valor}</h2>
              {/* <button onClick={this.handleChecar(sensor.id)}>Checar</button> */}
              <button>Editar</button>
              <button onClick={() => this.handleRemove(sensor.id)}>Remover</button>
            </li>
          )
            ||
            <li>Nenhuma sensor cadastrado!</li>}

          <Link to={`/comodo/${this.props.match.params.id}/sensor`}>
            <Button>Cadastrar novo sensor</Button>
          </Link>
        </ul>

        <H1Styled>Atuadores</H1Styled>
        <ul>
          {this.state.atuadores.map((atuador) =>
            <li key={atuador.id}>
              <h2>{atuador.nome}</h2>
              <h2>{atuador.categoria}</h2>
              <h2>{atuador.valor}</h2>
              <button>Acionar</button>
              <button>Editar</button>
              <button>Remover</button>
            </li>
          )
            ||
            <li>Nenhuma atuador cadastrado!</li>}

          <Link to="/residencia">
            <Button>Cadastrar novo atuador</Button>
          </Link>
        </ul>
      </Content>
    );
  }
}

export default Componentes;
