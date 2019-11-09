import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { H1Styled, Select, Button, Input, Container, ContainerContainer } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Comodo extends Component {
  // Comodo
  notifyComodoSuccess = () => toast.success('Cômodo cadastrado com sucesso', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  notifyComodoError = () => toast.error('Não foi possível cadastrar esse cômodo', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  // Atuador
  notifyAtuadorSuccess = () => toast.success('Atuador cadastrado com sucesso', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  notifyAtuadorError = () => toast.error('Não foi possível cadastrar esse atuador', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  // Sensor
  notifySensorSuccess = () => toast.success('Sensor cadastrado com sucesso', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  notifySensorError = () => toast.error('Não foi possível cadastrar esse sensor', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  state = {
    residencia: null,
    componentes: [],
    tipoComodo: null,
    tipoAtuador: [],
    tipoAtuadorId: null,
    redirect: false,
    comodo: null,
    tipoSensorId: null,
    tipoSensor: [],
    nomeSensor: '',
    nomeAtuador: ''
  }

  componentDidMount() {
    this.setState({ residencia: this.props.match.params.id });

    api.get('/componentes')
      .then(response => {
        this.setState({ componentes: response.data.tipoComodo, tipoAtuador: response.data.tipoAtuador, tipoSensor: response.data.tipoSensor });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange = e => {
    this.setState({ tipoComodo: e.target.value });
  }

  handleChangeAtuador = e => {
    this.setState({ tipoAtuadorId: e.target.value });
  }

  handleChangeSensor = e => {
    this.setState({ tipoSensorId: e.target.value });
  }



  // CADASTRA COMODO
  cadastraComodo = () => {
    api.post('/comodo/create', {
      'residencia': this.state.residencia,
      'tipoComodo': this.state.tipoComodo
    })
      .then(response => {
        this.setState({ comodo: response.data.comodo });
        this.notifyComodoSuccess();
      })
      .catch(error => {
        console.log(error);
        this.notifyComodoError();
      });
  }


  // CADASTRA ATUADOR
  cadastraAtuador = () => {
    console.log(this.state);

    api.post('/atuador/create', {
      'comodo': this.state.comodo,
      'tipoAtuador': this.state.tipoAtuadorId,
      'nome': this.state.nomeAtuador
    })
      .then(response => {
        // this.setState({ redirect: true, comodo: response.data.comodo });
        this.notifyAtuadorSuccess();
      })
      .catch(error => {
        this.notifyAtuadorError();
        console.log(error);
      });
  }


  // CADASTRA SENSOR
  cadastraSensor = () => {
    api.post('/sensor/create', {
      'comodo': this.state.comodo,
      'tipoSensor': this.state.tipoSensorId,
      'nome': this.state.nomeSensor
    })
      .then(response => {
        //Aqui pode redirecionar
        this.notifySensorSuccess();
      })
      .catch(error => {
        this.notifySensorError();
        console.log(error);
      });
  }

  handleOnChange = e => {
    if (e.target.name == 'nome-sensor') {
      this.setState({ nomeSensor: e.target.value });
    }

    if (e.target.name == 'nome-atuador') {
      this.setState({ nomeAtuador: e.target.value });
    }
  }


  render() {
    return (
      <>
        <ContainerContainer>

          {/* Cadastrar comodo */}
            <H1Styled>Adicionar novo cômodo</H1Styled>
            <Select name="tipo" placeholder="Nome do cômodo" onChange={this.handleChange}>
              {this.state.componentes.map((opcao) => <option key={opcao.id} value={opcao.id}>{opcao.nome}</option>) || <option>Selecione um cômodo</option>}
            </Select>
            <Button onClick={this.cadastraComodo}>Cadastrar Cômodo</Button>
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
            <ToastContainer />

        <Link to={`/comodo/list/${this.state.residencia}`}>
          <Button>Finalizar cadastros</Button>
        </Link>
        </ContainerContainer>

      </>

    );  
    }  

    }  

export default Comodo;