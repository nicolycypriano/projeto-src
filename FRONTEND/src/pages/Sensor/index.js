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
import Header from '../../components/Header/index'


class Sensor extends Component {

  state = {
    tipoSensor: [],
    comodo: null,
    comodoTipo: null
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({ comodo: this.props.match.params.idComodo})

    api.get('/componentes')
      .then(response => {
        this.setState({ tipoSensor: response.data.tipoSensor });
      })
      .catch(function (error) {
        console.log(error);
      });

    api.get(`/comodo/${this.props.match.params.id}`)
    .then(response => {
      this.setState({ comodoTipo: response.data.comodo });
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
      toast.success("Sensor criado com sucesso!")
      // this.props.history.push("/residencia/list");

    } catch (err) {
      toast.error("Não foi possível criar um sensor!")
      console.log(err)
    }
  }

  render() {
    return (
      <>
      <Header/>

      <Container>
        <H1Styled>
          <h1>Adicionar novo sensor {this.state.comodoTipo ? " - cômodo  " + this.state.comodoTipo[0].nome : ""}</h1>
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
                  <Link to={`/componentes/residencia/${this.props.match.params.idResidencia}/comodo/${this.props.match.params.idComodo}`}>
                    <BackButton>Voltar</BackButton>
                  </Link>
      </Container>
      </>
    );
  }
}

export default Sensor;
