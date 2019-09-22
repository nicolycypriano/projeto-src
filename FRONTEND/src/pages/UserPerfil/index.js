import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//importando imagens
import Logo from '../../assets/img/userPerfilLogo.svg'
import AddResp from '../../assets/img/userPerfilAddResp.svg'
import RemResp from '../../assets/img/userPerfilRemResp.svg'

//importando componentes
import LogoIni from '../../components/Logo'
import {
    LogoStyled,
    TitleH1Styled,
    TitleH2Styled,
    TitleH4Styled,
    ImgStyled,
    ContainerStyled
} from './styles'

class UserPerfil extends Component {
    render() {
        return (
            <>
                <LogoIni />
                <LogoStyled src={Logo} />
                <TitleH1Styled>Wycthor Augusto Baldoíno</TitleH1Styled>
                <TitleH2Styled>wycthor.augusto@gmail.com</TitleH2Styled>
                <TitleH4Styled>(48) 99633-1718</TitleH4Styled>
                <ContainerStyled>
                    <Link>
                        <ImgStyled src={AddResp} />
                    </Link>
                    <Link>
                        <ImgStyled src={RemResp} />
                    </Link>
                </ContainerStyled>
            </>
        )
    }
}

export default UserPerfil
