import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Import de Imagens
import Editar from '../../assets/projetistaProjetosEditar.svg';
import Listar from '../../assets/projetistaProjetosListar.svg';
import Cadastrar from '../../assets/projetistaProjetosCadastro.svg';

//Import dos Componentes
import LogoIni from '../../components/Logo';
import Icon from '../../components/Icon';
import {
  TitleH1Styled,
  TitleH2Styled,
  ConstainerIconsStyled,
  IconStyled,
} from './styles';

class ProjestistaProjetos extends Component {
  render() {
    return (
      <>
        <LogoIni />
        <TitleH1Styled>Projetos</TitleH1Styled>
        <TitleH2Styled></TitleH2Styled>
        <ConstainerIconsStyled>
          <Link to="">
            <IconStyled src={Listar} />
          </Link>
          <Link to="">
            <IconStyled src={Cadastrar} />
          </Link>
          <Link to="">
            <IconStyled src={Editar} />
          </Link>
        </ConstainerIconsStyled>
      </>
    );
  }
}

export default ProjestistaProjetos;
