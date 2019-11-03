import React, { Component } from 'react';
import { H1Styled, Select, Button } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';

class Comodo extends Component {

  state = {
    residencia: null,
    componentes: [],
    comodo: null
  }

  componentDidMount() {
    this.setState({ residencia: this.props.location.state.residencia });
    api.get('/componentes')
      .then(response => {
        this.setState({ componentes: response.data.tipoComodo });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange = e => {
    this.setState({ comodo: e.target.value });
  }

  cadastraComodo = () => {
    console.log(this.state)

    api.post('/comodo/create', {
      'residencia': this.state.residencia,
      'tipoComodo': this.state.comodo
    })
      .then(response => {
        //this.setState({ componentes: response.data.tipoComodo});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <H1Styled>Adicionar novo cômodo</H1Styled>
        <Select name="tipo" placeholder="Nome do cômodo" onChange={this.handleChange}>
          {this.state.componentes.map((opcao) => <option key={opcao.id} value={opcao.id}>{opcao.nome}</option>) || <option>Selecione um cômodo</option>}
        </Select>

        <Link to="/atuador">
          <Button onClick={this.cadastraComodo}>Inserir comodo</Button>
        </Link>
      </>
    );
  }

}

export default Comodo;