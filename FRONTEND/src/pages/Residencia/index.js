import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { H1Styled, Input, Button, FormGroup, Form, FieldErrorMessage, Container, BackButton} from './styles';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/index'


class Main extends Component {
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
    redirect: false,
  };


  handleSubmit = async ({ name, logradouro, numero }, { resetForm }) => {
    try {

      const { data } = await api
        .post('/residencia/create', {
          nome: name,
          logradouro: logradouro,
          numero: numero,
        })
      resetForm()
      toast.success("Residência criada com sucesso!")
      // this.props.history.push("/residencia/list");

    } catch (err) {
      toast.error("Não foi possível criar uma residência!")
      console.log(err)
    }

  }


  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to={{ pathname: "/comodo", state: { residencia: this.state.residencia } }} />;
    }

    return (
      <>
      <Header/>

      <Container>
        <H1Styled>
          <h1>Adicionar nova residência</h1>
        </H1Styled>
        <Formik
          initialValues={{
            name: "",
            logradouro: "",
            numero: "",
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
                  {errors.name && touched.name ? (
                    <FieldErrorMessage>{errors.name}</FieldErrorMessage>
                  ) : null}
                  <Input
                    name="name"
                    placeholder="Casa"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                </FormGroup>
                <FormGroup>
                  {errors.logradouro && touched.logradouro ? (
                    <FieldErrorMessage>{errors.logradouro}</FieldErrorMessage>
                  ) : null}
                  <Input
                    name="logradouro"
                    placeholder="Rua"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.logradouro}
                  />
                </FormGroup>
                <FormGroup>
                  {errors.numero && touched.numero ? (
                    <FieldErrorMessage>{errors.numero}</FieldErrorMessage>
                  ) : null}
                  <Input
                    name="numero"
                    placeholder="Número"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.numero}
                  />
                </FormGroup>

                <FormGroup>
                  <Button>Inserir</Button>
                </FormGroup>
              </Form>
            )}
        </Formik>
                  <Link to={`/residencia/list`}>
                    <BackButton>Voltar</BackButton>
                  </Link>


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
      </>
    );
  }
}

export default Main;