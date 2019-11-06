import React, { Component } from 'react';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ButtonAtuadorAcionar,
  ButtonAtuadorRecuar,
  ButtonSensorOn,
  ButtonSensorOff,
  Container,
  ContainerLi
} from './styles';

class ComodoList extends Component {
  //Aciona sensor
  notifyAtivaSensorSuccess = () =>
    toast.success('Sensor ativado com sucesso', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });

  state = {
    comodos: [],
    idSensor: null
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    api
      .get(`/componentes/comodo/residencia/${this.props.match.params.id}`)
      .then(response => {
        this.setState({
          comodos: response.data.comodos,
          idSensor: response.data.comodos.idSensor
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  ativaSensor = () => {
    console.log('bbb', this.state.idSensor);
    api
      .post('/sensor/acionar', {
        idSensor: this.state.idSensor
      })
      .then(response => {
        console.log('ccccc', response.data);
        this.setState({ idSensor: response.data.comodo });
        this.notifyAtivaSensorSuccess();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <ul>
        {this.state.comodos.map(elemento => (
          <Container>
            <li key={elemento.id}>
              <ContainerLi>
                <b>Código do comodo: </b> {elemento.idComodo}
              </ContainerLi>
              <b>
                Sensor:
                <ButtonSensorOn onClick={this.ativaSensor}>ON</ButtonSensorOn>
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
                <ToastContainer /> <ButtonSensorOff>OFF</ButtonSensorOff>
              </b>
              <br />
              {elemento.nomeSensor}
              <br />
              <br />

              <b>
                Atuador:
                <ButtonAtuadorAcionar>Acionar</ButtonAtuadorAcionar>
                <ButtonAtuadorRecuar>Recuar</ButtonAtuadorRecuar>
              </b>
              <br />
              {elemento.nomeAtuador}
              <br />
              <br />
            </li>
            <br />
          </Container>
        )) || <li>Nenhuma residência cadastrada!</li>}
      </ul>
    );
  }
}

export default ComodoList;
