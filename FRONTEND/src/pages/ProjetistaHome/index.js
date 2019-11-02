//Terminar Projetista Modulo
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Import de Imagens
import Usuarios from '../../assets/projetistaHomeUsuarios.svg';
import Modulos from '../../assets/projetistaHomeModulos.svg';
import Projetos from '../../assets/projetistaHomeProjetos.svg';

//Import dos Componentes
import LogoIni from '../../components/Logo';
import Icon from '../../components/Icon';
import {
  TitleH1Styled,
  TitleH2Styled,
  ConstainerIconsStyled,
  IconStyled,
} from './styles';

class ProjestistaHome extends Component {
  render() {
    return (
      <>
        <LogoIni />
        <TitleH1Styled>Sistema de Controle Residencial</TitleH1Styled>
        <TitleH2Styled>Olá, projetista!</TitleH2Styled>
        <ConstainerIconsStyled>
          <Link to="/projetistaUsuarios">
            <IconStyled src={Usuarios} />
          </Link>
          <Link to="/projetistaProjetos">
            <IconStyled src={Projetos} />
          </Link>
          <Link to="/projetoModulos">
            <IconStyled src={Modulos} />
          </Link>
        </ConstainerIconsStyled>
      </>
    );
  }
}

export default ProjestistaHome;
