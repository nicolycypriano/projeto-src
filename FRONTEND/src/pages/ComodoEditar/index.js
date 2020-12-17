import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { H1Styled, Input, Button, FormGroup, Form, FieldErrorMessage, Container, BackButton, Select } from './styles';
import api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Formik } from "formik";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/index'


class ComodoEditar extends Component {
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
    comodoId: null,
    tipoComodo: [],
    nome: ''
  };

  componentDidMount() {
    this.setState({ comodoId: this.props.match.params.id})
    
    api.get('/componentes')
    .then(response => {
      this.setState({ tipoComodo: response.data.tipoComodo });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSubmit = async ({ tipoComodo }, { resetForm }) => {
    try {
      const { data } = await api
        .post(`/comodo/edit/${this.state.comodoId}`, {
          tipoComodo: tipoComodo,
        })
      resetForm()
      toast.success("Cômodo editado com sucesso!")
      // this.props.history.push("/residencia/list");    
    } catch (err) {
      toast.error("Não foi possível editar o cômodo!")
      console.log(err)
    }

  }

  render() {
    return (
      <>
      <Header/>

      <Container>
        <H1Styled>
          <h1>Editar comodo</h1>
        </H1Styled>
        <Formik
          initialValues={{
            tipoComodo: this.state.tipoComodo
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
                <Select
                  name="tipoComodo"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.tipoComodo}
                >
                {this.state.tipoComodo.map((opcao) => <option key={opcao.id} value={opcao.id}>{opcao.nome}</option>) || <option>Selecione um tipo de comodo</option>}
                </Select>
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
      </>
    );
  }
}

export default ComodoEditar;