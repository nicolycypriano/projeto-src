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
import Header from '../../components/Header/index'



class Sensor extends Component {

  state = {
    tipoSensor: [],
    comodo: null,
    sensorAtual: [{id: 1, nome: ""}],
    comodoTipo: null,
    loading: false

  }

  componentDidMount() {
    this.setState({ loading: true })

    console.log(this.props)
    api.get('/componentes')
      .then(response => {
        this.setState({ tipoSensor: response.data.tipoSensor });
        this.setState({ loading: false })

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
    
    api.get(`/comodo/${this.props.match.params.idComodo}`)
    .then(response => {
      console.log(response)
      this.setState({ comodoTipo: response.data.comodo });
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

      api.get(`/sensor/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ sensorAtual: response.data.sensor });
      })
      .catch(function (error) {
        console.log(error);
      });
    } catch (err) {
      toast.error("Não foi possível editar o sensor!")
      console.log(err)
    }
  }

  render() {
    const { loading } = this.state

    return (
      <>
      <Header/>

      <Container>
        <Loading loading={loading} />
      <br></br>
      <br></br>
      <br></br>
        <H1Styled>
          <h1> {this.state.comodoTipo ? " Editar sensor do cômodo " + this.state.comodoTipo[0].nome : ""}</h1>
        </H1Styled>
        <Formik
          initialValues={{
            nome: "",
            tipoSensor: "1",
          }}
          enableReinitialize={true}
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
      </>
    );
  }
}

export default Sensor;
