// Alterações Wycthor

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//Import de Imagens
import Usuarios from '../../assets/img/projetistaHomeUsuarios.svg'
import Modulos from '../../assets/img/projetistaHomeModulos.svg'
import Projetos from '../../assets/img/projetistaHomeProjetos.svg'

//Import dos Componentes
import LogoIni from '../../components/Logo'
import Icon from '../../components/Icon'
import {
    TitleH1Styled,
    TitleH2Styled,
    ConstainerIconsStyled,
    IconStyled
} from './styles'

class ProjestistaHome extends Component {
    render() {
        return (
            <>
            <LogoIni />>
            <TitleH1Styled>Sistema de Controle Residencial</TitleH1Styled>
            <TitleH2Styled>Olá, projetista!</TitleH2Styled>
            <ConstainerIconsStyled>
                <link to="">
                    <IconStyled src={Usuarios} />
                </link>
                <link to="">
                    <IconStyled src={Projetos} />
                </link>
                <link to="">
                    <IconStyled src={Modulos} />
                </link>
            </ConstainerIconsStyled>
            </>
        )
    }
}

export default ProjestistaHome