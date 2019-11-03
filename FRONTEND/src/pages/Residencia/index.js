import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { H1Styled, Input, Button } from './styles';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Main extends Component {
  // Residencia
  notifyResidenciaSuccess = () => toast.success('Residência cadastrado com sucesso', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  notifyResidenciaError = () => toast.error('Não foi possível cadastrar essa residência', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });




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
        this.notifyResidenciaSuccess();
      })
      .catch(error => {
        console.log(error);
        this.notifyResidenciaError();
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
      return <Redirect to={{ pathname: "/comodo", state: { residencia: this.state.residencia } }} />;
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </>
    );
  }
}

export default Main;