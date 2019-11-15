import React, { Component } from 'react';
import {
  H1Styled,
  Select,
  Button,
  Container,
  ContainerContainer,
  Input,
  FormGroup,
  Form, 
  BackButton
} from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { Formik } from "formik";
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/loading'


class Atuador extends Component {

  state = {
    tipoAtuador: [],
    comodo: null,
    atuadorAtual: null,
    comodoTipo: null,
    loading: false

  }

  componentDidMount() {
    this.setState({ loading: true })

    api.get('/componentes')
    .then(response => {
      this.setState({ tipoAtuador: response.data.tipoAtuador });
      this.setState({ loading: false })

    })
    .catch(function (error) {
      console.log(error);
    });
    
    api.get(`/atuador/${this.props.match.params.id}`)
    .then(response => {
      this.setState({ atuadorAtual: response.data.atuador });
    })
    .catch(function (error) {
      console.log(error);
    });

    api.get(`/comodo/${this.props.match.params.idComodo}`)
    .then(response => {
      console.log(response)
      this.setState({ comodoTipo: response.data.comodo });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleSubmit = async ({ nome, tipoAtuador }, { resetForm }) => {
    console.log(tipoAtuador)
    try {
      const { data } = await api
        .post(`/atuador/edit/${this.state.atuadorAtual[0].id}`, {
          nome: nome,
          tipoAtuador: tipoAtuador,
        })
      resetForm()
      toast.success("Atuador editado com sucesso!")
      // this.props.history.push("/residencia/list");

    } catch (err) {
      toast.error("Não foi possível editar o atuador!")
      console.log(err)
    }
  }

  render() {
    const { loading } = this.state

    return (
      <Container>
        <Loading loading={loading} />
      <br></br>
      <br></br>
      <br></br>
        <H1Styled>
          <h1> {this.state.comodoTipo ? " Editar atuador do cômodo " + this.state.comodoTipo[0].nome : ""}</h1>
        </H1Styled>
        <Formik
          initialValues={{
            nome: "",
            tipoAtuador: "1",
          }}
          onSubmit={this.handleSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
            handleSubmit,
          }) => (
              <Form onSubmit={handleSubmit}>

                <FormGroup>
                  <Input
                    name="nome"
                    placeholder="Nome"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nome}
                  />
                </FormGroup>
                <FormGroup>              
                <Select
                  name="tipoAtuador"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tipoAtuador}
                >
                  {this.state.tipoAtuador.map((opcao) => <option key={opcao.id} value={opcao.id}>{opcao.categoria}</option>) || <option>Selecione um atuador</option>}
                </Select>
                </FormGroup>

                <FormGroup>
                  <Button>Editar</Button>
                </FormGroup>

                <Link to={`/componentes/residencia/${this.props.match.params.idResidencia}/comodo/${this.props.match.params.idComodo}`}>
                  <BackButton>Voltar</BackButton>
                </Link>

              </Form>
            )}
        </Formik>
      </Container>
    );
  }
}

export default Atuador;
