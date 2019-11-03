import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { H1Styled, Select, Button, Input, Container, ContainerContainer } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';

class Comodo extends Component {

  state = {
    residencia: null,
    componentes: [],
    tipoComodo: null,
    tipoAtuador: [],
    tipoAtuadorId: null,
    redirect: false,
    comodo: null,
    tipoSensorId: null,
    tipoSensor: []
  }

  componentDidMount() {
    this.setState({ residencia: this.props.location.state.residencia });

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

  cadastraComodo = () => {
    api.post('/comodo/create', {
      'residencia': this.state.residencia,
      'tipoComodo': this.state.tipoComodo
    })
      .then(response => {
        this.setState({ comodo: response.data.comodo });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  cadastraAtuador = () => {
    console.log(this.state);

    api.post('/atuador/create', {
      'comodo': this.state.comodo,
      'tipoAtuador': this.state.tipoAtuadorId
    })
      .then(response => {
        // this.setState({ redirect: true, comodo: response.data.comodo });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  cadastraSensor = () => {
    api.post('/sensor/create', {
      'comodo': this.state.comodo,
      'tipoSensor': this.state.tipoSensorId
    })
      .then(response => {
        //Aqui pode redirecionar
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <ContainerContainer>
          <Container>
            <H1Styled>Adicionar novo cômodo</H1Styled>
            <Select name="tipo" placeholder="Nome do cômodo" onChange={this.handleChange}>
              {this.state.componentes.map((opcao) => <option key={opcao.id} value={opcao.id}>{opcao.nome}</option>) || <option>Selecione um cômodo</option>}
            </Select>
            <Button onClick={this.cadastraComodo}>Cadastrar Cômodo</Button>
          </Container>


          <Container>
            <H1Styled>Adicionar novo atuador</H1Styled>
            <Select name="tipo" placeholder="Nome do cômodo" onChange={this.handleChangeAtuador}>
              {this.state.tipoAtuador.map((opcao) => <option key={opcao.id} value={opcao.id}>{opcao.categoria}</option>) || <option>Selecione um atuador</option>}
            </Select>
            <Input placeholder="Nome do atuador"></Input>


            <Button onClick={this.cadastraAtuador}>Cadastrar Atuador</Button>
          </Container>

          <Container>
            <H1Styled>Adicionar novo sensor</H1Styled>
            <Select name="tipo" placeholder="Nome do cômodo" onChange={this.handleChangeSensor}>
              {this.state.tipoSensor.map((opcao) => <option key={opcao.id} value={opcao.id}>{opcao.categoria}</option>) || <option>Selecione um sensor</option>}
            </Select>
            <Input placeholder="Nome do sensor"></Input>


            <Button onClick={this.cadastraSensor}>Cadastrar Sensor</Button>
          </Container>
        </ContainerContainer>
      </>

    );
  }

}

export default Comodo;