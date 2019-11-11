import React, { Component } from 'react';
import {
  H1Styled,
  Select,
  Button,
  Content,
  BackButton
} from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

class Componentes extends Component {

  state = {
    sensores: [],
    atuadores: []
  }

  componentDidMount() {
    console.log(this.props)
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

      this.setState(state => {
        const list = state.sensores.map((item) => {
          if (item.id === id) {
            return item.valor = response.data.valor;
          } else {
            return item;
          }
        });
        return {
          list,
        };
      });
      toast.success("Valor alterado!")
    })
    .catch(function (error) {
      toast.error("Não foi possível alterar o valor!")
      console.log(error);
    });   
  }

  
  handleAcionar = (id) => {
    api.post(`/atuador/movimentar/${id}`)
    .then(response => {
      this.setState(state => {
        const list = state.atuadores.map((item) => {
          if (item.id === id) {
            return item.valor = response.data.valor;
          } else {
            return item;
          }
        });
        return {
          list,
        };
      });
      toast.success("Atuador movimentado!")
    })
    .catch(function (error) {
      toast.error("Não foi possível alterar o valor!")
      console.log(error);
    });   
  }

  handleRemoveSensor = (id) => {
    api.post(`/sensor/remove/${id}`)
    .then(response => {
        let sensores = this.state.sensores.filter((sensor) => sensor.id != id);
        this.setState({ sensores: sensores});
        toast.success("Sensor removido com sucesso!")
    })
    .catch(function (error) {
      toast.success("Não foi possível remover o sensor!")
      console.log(error);
    });   
  }

  handleRemoveAtuador = (id) => {
    api.post(`/atuador/remove/${id}`)
    .then(response => {
        let atuadores = this.state.atuadores.filter((atuador) => atuador.id != id);
        this.setState({ atuadores: atuadores});
        toast.success("Atuador removido com sucesso!")
    })
    .catch(function (error) {
      toast.success("Não foi possível remover o atuador!")
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
              <p>Nome:</p><h2>{sensor.nome}</h2><br></br>
              <p>Tipo de sensor:</p><h2>{sensor.categoria}</h2><br></br>
              <p>Valor (em graus ou em medida):</p><h2>{sensor.valor}</h2>
              <button onClick={() => this.handleChecar(sensor.id)}>Checar</button>
              <Link to={`/componentes/residencia/${this.props.match.params.idResidencia}/comodo/${this.props.match.params.id}/sensor/edit/${sensor.id}`}>
                <button>Editar</button>
              </Link>
              <button onClick={() => this.handleRemoveSensor(sensor.id)}>Remover</button>
            </li>
          )
            ||
            <li>Nenhuma sensor cadastrado!</li>}

          <Link to={`/residencia/${this.props.match.params.idResidencia}/comodo/${this.props.match.params.id}/sensor`}>
            <Button>Cadastrar novo sensor</Button>
          </Link>
        </ul>

        <H1Styled>Atuadores</H1Styled>
        <ul>
          {this.state.atuadores.map((atuador) =>
            <li key={atuador.id}>
              <p>Nome: </p><h2>{atuador.nome}</h2> <br></br>
              <p>Tipo de atuador: </p><h2>{atuador.categoria}</h2><br></br>
              <p>Valor (acionado ou desacionado):</p><h2>{atuador.valor ? 'Acionado' : 'Não acionado'}</h2><br></br>
              <button onClick={() => this.handleAcionar(atuador.id)}>{atuador.valor ? 'Voltar posicão' : 'Acionar' }</button>
              <Link to={`/componentes/residencia/${this.props.match.params.idResidencia}/comodo/${this.props.match.params.id}/atuador/edit/${atuador.id}`}>
                <button>Editar</button>
              </Link>
              <button onClick={() => this.handleRemoveAtuador(atuador.id)}>Remover</button>
            </li>
          )
            ||
            <li>Nenhum atuador cadastrado!</li>}
          
          <Link to={`/residencia/${this.props.match.params.idResidencia}/comodo/${this.props.match.params.id}/atuador`}>
            <Button>Cadastrar novo atuador</Button>
          </Link>
        </ul>

        <Link to={`/comodo/list/${this.props.match.params.idResidencia}`}>
          <BackButton>Voltar</BackButton>
        </Link>
      </Content>
    );
  }
}

export default Componentes;
