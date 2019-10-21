import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Import de Imagens
import Usuarios from '../../assets/img/projetistaListaUsuarios.svg'
import Cadastro from '../../assets/img/projetistaUsuarioCadastro.svg'

//Import dos Componentes
import LogoIni from '../../components/Logo'
import Icon from '../../components/Icon'
import {
    TitleH1Styled,
    TitleH2Styled,
    ConstainerIconsStyled,
    IconStyled
} from './styles'

class ProjestistaUsuarios extends Component {
    render() {
        return (
            <>
            <LogoIni />
            <TitleH1Styled>Usuários</TitleH1Styled>
            <TitleH2Styled></TitleH2Styled>
            <ConstainerIconsStyled>
                <Link to="">
                    <IconStyled src={Usuarios} />
                </Link>
                <Link to="/projetistaUsuarioCadastro">
                    <IconStyled src={Cadastro} />
                </Link>
            </ConstainerIconsStyled>
            </>
        )
    }
}

export default ProjestistaUsuarios