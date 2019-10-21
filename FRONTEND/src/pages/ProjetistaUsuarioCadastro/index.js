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
    IconStyled,
    DivStyled
} from './styles'

class ProjestistaUsuariosCadastro extends Component {
    
    //Arrumar para entrega 4
    render() {
        return (
            <>
            <LogoIni />
            <TitleH1Styled>Cadastro de Usuários</TitleH1Styled>
            <TitleH2Styled></TitleH2Styled>
            
            
            <form>
                <DivStyled>
                    <labelStyled>Username</labelStyled>
                    <input type='text' />
                </DivStyled>
            </form>
            </>

        )
    }

}


export default ProjestistaUsuariosCadastro