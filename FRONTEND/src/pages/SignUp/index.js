// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';

// import logo from '~/assets/logo.svg';

// import { signUpRequest } from '~/store/modules/auth/actions';

// const schema = Yup.object().shape({
//   name: Yup.string().required('O nome é obrigatório.'),
//   email: Yup.string()
//     .email('Email inválido!')
//     .required('E-mail é obrigatório'),
//   password: Yup.string()
//     .min(6, 'No minímo 6 caracteres.')
//     .required('A senha é obrigatória.'),
// });

// export default function SignUp() {
//   const dispatch = useDispatch();

//   function handleSubmit({ name, email, password }) {
//     dispatch(signUpRequest(name, email, password));
//   }

//   return (
//     <>
//       <img src={logo} alt="GoBarber" />
//       <Form schema={schema} onSubmit={handleSubmit}>
//         <Input name="name" placeholder="Nome completo" />
//         <Input name="email" type="email" placeholder="Insira seu e-mail" />
//         <Input name="password" type="password" placeholder="Insira sua senha" />

//         <button type="submit">Criar conta</button>
//         <Link to="/">Já tenho login</Link>
//       </Form>
//     </>
//   );
// }




import React, { Component } from "react";

import { Link, withRouter } from "react-router-dom";

import Logo from "../../assets/logo-purple.svg";

import { Form, Container, Container2 } from "./styles";

import api from "../../services/api";


class SignUp extends Component {

  state = {
    username: "",
    email: "",
    password: "",
    error: ""
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { username, email, password } = this.state;
    if (!username || !email || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      console.log(username, email, password)
      try {
        await api.post("/register", { username, email, password });
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };
  

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ username: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar grátis</button>
          <hr />
          <Link to="/">Fazer login</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);
