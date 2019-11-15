import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading/loading'

import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Button,
  H1Styled,
  Content,
  BackButton,
  Div
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
    idSensor: null,
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true })
    api.get(`/componentes/comodo/residencia/${this.props.match.params.id}`)
    .then(response => {
      this.setState({
        comodos: response.data.comodos,
        idSensor: response.data.comodos.idSensor
      });
      this.setState({ loading: false })
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

  handleRemove = (id) => {
    api.post(`/comodo/remove/${id}`)
    .then(response => {
          toast.success("Cômodo removido com sucesso!")
          let comodos = this.state.comodos.filter((comodo) => comodo.id != id);
          this.setState({ comodos: comodos});          
    })
    .catch(function (error) {
      toast.error("Não foi possível remover o cômodo!")
    });   
  }

  render() {

    const { loading } = this.state


    return (
      <>
      <Content>
        <Div>
          <Loading loading={loading} />
        </Div>
        <br />
        <br />
        <br />
        <H1Styled>Seus cômodos</H1Styled>
        <ul>
          {this.state.comodos.map((comodo) =>
            <li key={comodo.id}>
              <Link to={`/componentes/residencia/${this.props.match.params.id}/comodo/${comodo.id}`}>
                <h2>{comodo.nome}</h2>
              </Link>
              <Link to={`/componentes/residencia/${this.props.match.params.id}/comodo/${comodo.id}`}>
                <button>Visualizar atuadores e sensores</button>
              </Link>
              <Link to={`/comodo/edit/${comodo.id}`}>
                <button>Editar</button>
              </Link>
              <button onClick={() => this.handleRemove(comodo.id)}>Remover</button>
            </li>
          )
            ||
            <li>Nenhuma residência cadastrada!</li>}

          <Link to={`/residencia/${this.props.match.params.id}/comodo`}>
            <Button>Cadastrar novo cômodo</Button>
          </Link>
        </ul>
      
       <Link to="/residencia/list">
        <BackButton>Voltar</BackButton>
        </Link>
      </Content>

      </>
    )
  }
}

export default ComodoList;
