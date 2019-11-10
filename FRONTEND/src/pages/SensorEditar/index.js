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
    comodo: null,
    sensorAtual: null
  }

  componentDidMount() {
    console.log(this.props)
    api.get('/componentes')
      .then(response => {
        this.setState({ tipoSensor: response.data.tipoSensor });
      })
      .catch(function (error) {
        console.log(error);
      });

    api.get(`/sensor/${this.props.match.params.id}`)
    .then(response => {
      this.setState({ sensorAtual: response.data.sensor });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleSubmit = async ({ nome, tipoSensor }, { resetForm }) => {
    try {
      const { data } = await api
        .post(`/sensor/edit/${this.state.sensorAtual[0].id}`, {
          nome: nome,
          tipoSensor: tipoSensor,
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
          <h1>Editar sensor</h1>
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

export default Sensor;
