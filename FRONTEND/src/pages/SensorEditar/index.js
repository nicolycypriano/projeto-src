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
} from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api'
import { Formik } from "formik";
import { toast } from 'react-toastify';

class Sensor extends Component {

  state = {
    tipoSensor: [],
    comodo: null,
    sensorAtual: null
  }

  componentDidMount() {
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
      toast.success("Sensor editado com sucesso!")
      // this.props.history.push("/residencia/list");

    } catch (err) {
      toast.error("Não foi possível editar o sensor!")
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
              </Form>
            )}
        </Formik>
      </Container>
    );
  }
}

export default Sensor;
