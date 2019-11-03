import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { H1Styled, Input, Button } from './styles';
import api from '../../services/api';

class Main extends Component {
  state = {
    residencia: null,
    nome: '',
    logradouro: '',
    numero: 0,
    redirect: false,
  };

  cadastraResidencia = () => {
    api
      .post('/residencia/create', {
        nome: this.state.nome,
        logradouro: this.state.logradouro,
        numero: this.state.numero,
      })
      .then(response => {
        this.setState({ redirect: true, residencia: response.data.residencia });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleOnChange = e => {
    if (e.target.name == 'name') {
      this.setState({ nome: e.target.value });
    }

    if (e.target.name == 'logradouro') {
      this.setState({ logradouro: e.target.value });
    }

    if (e.target.name == 'numero') {
      this.setState({ numero: e.target.value });
    }
  };

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: '/comodo',
            state: { residencia: this.state.residencia },
          }}
        />
      );
    }

    return (
      <>
        <H1Styled>Adicionar nova residência</H1Styled>
        <Input
          name="name"
          onChange={this.handleOnChange}
          placeholder="Nome da casa"
        />
        <Input
          name="logradouro"
          onChange={this.handleOnChange}
          placeholder="Nome da rua"
        />
        <Input
          name="numero"
          onChange={this.handleOnChange}
          placeholder="Número da casa"
        />

        <Button onClick={this.cadastraResidencia}>Inserir</Button>
      </>
    );
  }
}

export default Main;
