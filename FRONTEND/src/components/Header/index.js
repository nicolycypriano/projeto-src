import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from "../../services/auth";


import Notifications from '~/components/Notifications';

import logo from '../../assets/logo-purple.svg';
import logoutt from '../../assets/logout.svg';



import { Box } from './styles';

class Header extends Component {
  
    logout = () => {
      logout()
    }


render(){
  return (
    <>
    <Box>
      <Link to='/residencia/list'>
        <img src={logo}></img>
      </Link>
    {/* </Box> */}
<h1>Bem vindo ao controle de suas residências</h1>
    {/* <Box> */}
    <Link to='/'>
      <button onClick={this.logout}><img src={logoutt}></img></button>
    </Link>
  </Box>
  </>
  );
}
}

export default Header;
