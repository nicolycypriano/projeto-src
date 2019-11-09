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

class Atuador extends Component {

  state = {
    tipoAtuador: [],
    comodo: null
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({ comodo: this.props.match.params.id})

    api.get('/componentes')
      .then(response => {
        this.setState({ tipoAtuador: response.data.tipoAtuador });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit = async ({ nome, tipoAtuador }, { resetForm }) => {
    try {
      const { data } = await api
        .post('/atuador/create', {
          nome: nome,
          tipoAtuador: tipoAtuador,
          comodo: this.state.comodo
        })
      resetForm()

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Container>
        <H1Styled>
          <h1>Adicionar novo atuador</h1>
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
                  <Button>Inserir</Button>
                </FormGroup>
              </Form>
            )}
        </Formik>
                  <Link to={`/componentes/residencia/${this.props.match.params.idResidencia}/comodo/${this.props.match.params.id}`}>
                    <BackButton>Voltar</BackButton>
                  </Link>

                  
      </Container>
    );
  }
}

export default Atuador;
