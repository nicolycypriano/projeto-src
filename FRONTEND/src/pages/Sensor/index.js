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

class Sensor extends Component {

  state = {
    tipoSensor: [],
    comodo: null
  }

  componentDidMount() {
    this.setState({ comodo: this.props.match.params.id})

    api.get('/componentes')
      .then(response => {
        this.setState({ tipoSensor: response.data.tipoSensor });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit = async ({ nome, tipoSensor }, { resetForm }) => {
    try {
      const { data } = await api
        .post('/sensor/create', {
          nome: nome,
          tipoSensor: tipoSensor,
          comodo: this.state.comodo
        })
      resetForm()
      // this.props.history.push("/residencia/list");

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <Container>
        <H1Styled>
          <h1>Adicionar novo sensor</h1>
        </H1Styled>
        <Formik
          initialValues={{
            nome: "",
            tipoSensor: "1",
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
                  name="tipoSensor"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tipoSensor}
                >
                  {this.state.tipoSensor.map((opcao) => <option key={opcao.id} value={opcao.id}>{opcao.categoria}</option>) || <option>Selecione um sensor</option>}
                </Select>
                </FormGroup>

                <FormGroup>
                  <Button>Inserir</Button>
                </FormGroup>
              </Form>
            )}
        </Formik>
                  <Link to={`/componentes/comodo/${this.state.comodo}`}>
                    <BackButton>Voltar</BackButton>
                  </Link>
      </Container>
    );
  }
}

export default Sensor;
