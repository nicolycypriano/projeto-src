import React, { Component } from 'react';
import {
  H1Styled,
  Select,
  Button,
  Content,
  BackButton,
  Button2,
  Content2,
  H1Styled2,
  Div
} from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/loading'
import Back from '../../assets/back.svg'
import Header from '../../components/Header/index'



class Componentes extends Component {

  state = {
    sensores: [],
    atuadores: [],
    comodo: null,
    loading: false

  }

  componentDidMount() {
    this.setState({ loading: true })

    console.log(this.props)
    api.get(`/componentes/comodo/${this.props.match.params.idComodo}`)
      .then(response => {
        this.setState({ sensores: response.data.sensores, atuadores: response.data.atuadores });
        this.setState({ loading: false })

      })
      .catch(function (error) {
        console.log(error);
      });

    api.get(`/comodo/${this.props.match.params.idComodo}`)
    .then(response => {
      this.setState({ comodo: response.data.comodo });
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
    const { loading } = this.state

    return (
      <>
      <Header/>


        

<Content2>
<br></br>
        <br></br>
        <br></br>
      <Content>
        <br></br>
        <br></br>
        <Loading loading={loading} />
        <br></br>
        <br></br>

        <H1Styled> {this.state.comodo ? "Sensores do cômodo " + this.state.comodo[0].nome: ""}</H1Styled>
        <ul>
          {this.state.sensores.map((sensor) =>
            <li key={sensor.id}>
              <p>Nome:</p><h2>{sensor.nome}</h2><br></br>
              <p>Tipo de sensor:</p><h2>{sensor.categoria}</h2><br></br>
              <p>Valor:</p><h2>{
                sensor.categoria == 'Temperatura' 
                ? sensor.valor + " °C" : 
                sensor.valor == 1 ? 'Ligado' : 'Desligado'
              }</h2><br></br>
              <button onClick={() => this.handleChecar(sensor.id)}>
                {sensor.categoria == 'Abertura' || sensor.categoria == 'Presença' ? 'Ligar/Desligar' 
                                                                    : 'Verificar temperatura'} 
              </button>
              <Link to={`/componentes/residencia/${this.props.match.params.idResidencia}/comodo/${this.props.match.params.idComodo}/sensor/edit/${sensor.id}`}>
                <button>Editar</button>
              </Link>
              <button onClick={() => this.handleRemoveSensor(sensor.id)}>Remover</button>
            </li>
          )
            ||
            <li>Nenhuma sensor cadastrado!</li>}

          <Link to={`/residencia/${this.props.match.params.idResidencia}/comodo/${this.props.match.params.idComodo}/sensor`}>
            <Button>Cadastrar novo sensor</Button>
          </Link>
        </ul>
        </Content>
{/* </Content2>
        
<Content2>        */}
        <Content>
        <br></br>
        <br></br>
        <Loading loading={loading} />
        <br></br>
        <br></br>
        <H1Styled> {this.state.comodo ? " Atuadores do cômodo " + this.state.comodo[0].nome: ""}</H1Styled>
        <ul>
          {this.state.atuadores.map((atuador) =>
            <li key={atuador.id}>
              <p>Nome: </p><h2>{atuador.nome}</h2> <br></br>
              <p>Tipo de atuador: </p><h2>{atuador.categoria}</h2><br></br>
              <p>Valor (acionado ou desacionado):</p><h2>{atuador.valor ? 'Acionado' : 'Não acionado'}</h2><br></br>
              <button onClick={() => this.handleAcionar(atuador.id)}>{atuador.valor ? 'Voltar posicão' : 'Acionar' }</button>
              <Link to={`/componentes/residencia/${this.props.match.params.idResidencia}/comodo/${this.props.match.params.idComodo}/atuador/edit/${atuador.id}`}>
                <button>Editar</button>
              </Link>
              <button onClick={() => this.handleRemoveAtuador(atuador.id)}>Remover</button>
            </li>
          )
            ||
            <li>Nenhum atuador cadastrado!</li>}
          
          <Link to={`/residencia/${this.props.match.params.idResidencia}/comodo/${this.props.match.params.idComodo}/atuador`}>
            <Button>Cadastrar novo atuador</Button>
          </Link>
        </ul>
      </Content>
</Content2> 
        
        <Div>
          <Link to={`/comodo/list/${this.props.match.params.idResidencia}`}>
              <Button2>Voltar</Button2>
          </Link>
          <Link to={`/`}>
              <Button2 onClick={this.logout}>Sair</Button2>
          </Link>
        </Div>
      </>
    );
  }
}

export default Componentes;
