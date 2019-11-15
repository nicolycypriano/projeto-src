import React, { Component } from 'react';
import {
  H1Styled,
  Select,
  Button,
  Content,
} from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import { ToastContainer, toast } from 'react-toastify';
import Loading from '../../components/Loading/loading'

class ListagemResidencia extends Component {

  state = {
    residencias: [],
    loading: false
  }

  componentDidMount() {
    this.setState({ loading: true })

    api.get('/componentes/residencia')
      .then(response => {
        this.setState({ residencias: response.data.residencias });
        this.setState({ loading: false })
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
  handleRemove = (id) => {
    api.post(`/residencia/remove/${id}`)
    .then(response => {
        if (response.data.residencia != null) {
          toast.success("Residência removida com sucesso!")
          let residencias = this.state.residencias.filter((residencia) => residencia.id != id);
          this.setState({ residencias: residencias});        
        }       
        else {  
          toast.error("Desculpe, mas existem cõmodos associados a esta residencia.")
        }
      })
      .catch(function (error) {
      
      console.log(error);
    });   
  }

  render() {
    const { loading } = this.state

    return (
      <>
      <Content>
      <Loading loading={loading} />
      <br></br>
      <br></br>
      <br></br>
        <H1Styled>Suas residências</H1Styled>
        <ul>
          {this.state.residencias.map((residencia) =>
            <li key={residencia.id}>
              <Link to={`/comodo/list/${residencia.id}`}>
                <p>Nome: </p><h2>{residencia.nome}</h2><br></br>
                <p>Logradouro:</p><h2>{residencia.logradouro}</h2><br></br>
                <p>Número:</p><h2>{residencia.numero}</h2><br></br>
              </Link>
              <Link to={`/comodo/list/${residencia.id}`}>
                <button>Visualizar cômodos</button>
              </Link>
              <Link to={`/residencia/edit/${residencia.id}`}>
                <button>Editar</button>
              </Link>
              <button onClick={() => this.handleRemove(residencia.id)}>Remover</button>
            </li>
          )
            ||
            <li>Nenhuma residência cadastrada!</li>}

          <Link to="/residencia">
            <Button>Cadastrar nova residência</Button>
          </Link>
          <Link to="/">
            <Button>Sair</Button>
          </Link>
        </ul>
      </Content>
      </>
    );
  }
}

export default ListagemResidencia;
