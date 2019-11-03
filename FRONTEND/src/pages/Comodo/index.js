import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { H1Styled, Select, Button } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container } from '../Profile/AvatarInput/styles';

class Comodo extends Component {

  state = {
    residencia: null,
    componentes: [],
    tipoComodo: null,
    redirect: false,
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
    this.setState({ tipoComodo: e.target.value });
  }

  cadastraComodo = () => {
    api.post('/comodo/create', {
      'residencia': this.state.residencia,
      'tipoComodo': this.state.tipoComodo
    })
      .then(response => {
        this.setState({ redirect: true, comodo: response.data.comodo });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      console.log('é deus mamae', this.state);
      return <Redirect to={{ pathname: "/atuador", state: { comodo: this.state.comodo } }} />;
    }

    return (
      <>
        <H1Styled>Adicionar novo cômodo</H1Styled>
        <Select name="tipo" placeholder="Nome do cômodo" onChange={this.handleChange}>
          {this.state.componentes.map((opcao) => <option key={opcao.id} value={opcao.id}>{opcao.nome}</option>) || <option>Selecione um cômodo</option>}
        </Select>

        <Link to="/atuador">
          <Button onClick={this.cadastraComodo}>Inserir comodo</Button>
        </Link>


        <Container>
          <H1Styled>Adicionar atuador</H1Styled>
          <Select />

          <Button>OK</Button>
        </Container>
      </>

    );
  }

}

export default Comodo;