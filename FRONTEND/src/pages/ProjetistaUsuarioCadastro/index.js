//Terminar
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Import de Imagens

//Import dos Componentes
import LogoIni from '../../components/Logo'
import Icon from '../../components/Icon'
import {
    TitleH1Styled,
    TitleH2Styled,
    ConstainerIconsStyled,
    IconStyled
} from './styles'

class ProjestistaUsuariosCadastro extends Component {
    
    render() {
        return (
            <>
            <LogoIni />
            <TitleH1Styled>Cadastro de Usuários</TitleH1Styled>
            <TitleH2Styled></TitleH2Styled>

            </>
        )
    }

}


export default ProjestistaUsuariosCadastro