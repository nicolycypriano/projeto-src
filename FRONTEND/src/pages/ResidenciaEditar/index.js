import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { H1Styled, Input, Button, FormGroup, Form, FieldErrorMessage, Container, BackButton } from './styles';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from "formik";
import { Link } from 'react-router-dom';

class ResidenciaEditar extends Component {
  // Residencia
  notifyResidenciaSuccess = () => toast.success('Residência cadastrado com sucesso', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  notifyResidenciaError = () => toast.error('Não foi possível cadastrar essa residência', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });

  state = {
    residencia: null,
    nome: '',
    logradouro: '',
    numero: 0,
  };

  componentDidMount() {
    this.setState({ residencia: this.props.match.params.id})

    api.get(`/residencia/${this.state.residencia}`)
      .then(response => {
        this.setState({ residencia: response.data.residencia, nome: response.data.residencia.nome, logradouro : response.data.residencia.logradouro, nuemro: response.data.residencia.numero });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit = async ({ name, logradouro, numero }, { resetForm }) => {
    try {

      const { data } = await api
        .post(`/residencia/edit/${this.state.residencia}`, {
          nome: name,
          logradouro: logradouro,
          numero: numero,
        })
      resetForm()
      toast.success("Residência editada com sucesso!")
      // this.props.history.push("/residencia/list");

    } catch (err) {
      toast.error("Não foi possível editar a residência!")
      console.log(err)
    }

  }

  render() {
    return (
      <Container>
        <H1Styled>
          <h1>Editar residência</h1>
        </H1Styled>
        <Formik
          initialValues={{
            name: this.state.nome,
            logradouro: this.state.logradouro,
            numero: this.state.numero,
            dono: "2"
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
                    name="name"
                    placeholder="Casa"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </FormGroup>
                <FormGroup>

                  <Input
                    name="logradouro"
                    placeholder="Rua"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.logradouro}
                  />
                </FormGroup>
                <FormGroup>

                  <Input
                    name="numero"
                    placeholder="Número"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.numero}
                  />
                </FormGroup>

                <FormGroup>
                  <Button>Editar</Button>

                </FormGroup>
              </Form>
            )}
        </Formik>
            <BackButton onClick={() => this.props.history.go(-1)}>Voltar</BackButton>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </Container>
    );
  }
}

export default ResidenciaEditar;