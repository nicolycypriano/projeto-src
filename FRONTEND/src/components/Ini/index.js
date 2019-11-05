import React, { Component } from 'react';
import { IniStyled } from './styles';
import { link } from 'fs';
import { Link } from 'react-router-dom';


class Ini extends Component {

  render(){
    return(
      <Link to="/residencia/list">
      <IniStyled>Residencias</IniStyled>
      </Link>
    )
  }

}

export default Ini;