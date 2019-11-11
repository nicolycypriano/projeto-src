import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '../../assets/logo.svg';
import { Img, ContainerBloco, ContainerForm, H1, Body } from './styles';
import { Container } from './styles';
import { Box } from '~/components/Header/styles';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('Email inválido!')
//     .required('E-mail é obrigatório'),
//   password: Yup.string().required('A senha é obrigatória.')
// });

// export default function SignIn() {
//   const dispatch = useDispatch();
//   const loading = useSelector(state => state.auth.loading);

//   function handleSubmit({ email, password }) {
//     dispatch(signInRequest(email, password));
//   }

class SignIn extends Component {
  render() {
  return (
    <>
      <Body>
      </Body>


      <Container>
        <Img src={logo} alt="SRC" />
        <H1>Sistema Residencial de Controle e Monitoramento</H1>
          <Link to='/residencia/list'>
            <button>Acessar</button>
          </Link>
      </Container>
    </>
  );
  }
}

export default SignIn;