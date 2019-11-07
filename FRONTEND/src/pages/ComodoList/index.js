import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
  H1Styled,
  Button,
  Content,
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
    api.get(`/componentes/comodo/residencia/${this.props.match.params.id}`)
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
      <Content>
        <H1Styled>Cômodos</H1Styled>
        <ul>
          {this.state.comodos.map((comodo) =>
            <li key={comodo.id}>
              <Link to={`/componentes/comodo/${comodo.id}`}>
                <h2>{comodo.nome}</h2>
              </Link>
              <button>Editar</button>
              <button>Remover</button>
            </li>
          )
            ||
            <li>Nenhuma residência cadastrada!</li>}

          <Link to="/comodo">
            <Button>Cadastrar novo cômodo</Button>
          </Link>
        </ul>
      </Content>
    )
  }
}

export default ComodoList;
