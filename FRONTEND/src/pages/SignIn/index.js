import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';
import { Container } from '~/components/Header/styles';
import { Button } from '../Residencia/styles';

// const schema = Yup.object().shape({
//   email: Yup.string()
//     .email('Email inválido!')
//     .required('E-mail é obrigatório'),
//   password: Yup.string().required('A senha é obrigatória.'),
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
        <img src={logo} alt="SRC"/>
        <Form>
          <Input name="email" type="email" placeholder="Insira seu e-mail" />
          <Input name="password" type="password" placeholder="Insira sua senha" />

          <Link to="/residencia/list">
            <Button type="submit">Acessar</Button>
          </Link>
          <Link to="/criarconta">Criar conta gratuita</Link>
        </Form>
      </>
    );
  }
}

export default SignIn

