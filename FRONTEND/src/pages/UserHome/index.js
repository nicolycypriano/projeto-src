import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//importando imagens
import Perfil from '../../assets/img/userPerfil.svg'
import Imoveis from '../../assets/img/userImoveis.svg'
import Alarme from '../../assets/img/userAlarme.svg'
import Contato from '../../assets/img/userContato.svg'

//importando componentes
import LogoIni from '../../components/Logo'
import {
    TitleH1Styled,
    TitleH2Styled,
    IconStyled,
    ConstainerIconsStyled
} from './styles'

class UserHome extends Component {
    render() {
        return (
            <>
                <LogoIni />
                <TitleH1Styled>Sistema de Controle Residencial</TitleH1Styled>
                <TitleH2Styled>Olá, usuário!</TitleH2Styled>
                <ConstainerIconsStyled>
                    <Link>
                        <IconStyled src={Perfil} />
                    </Link>
                    <Link>
                        <IconStyled src={Imoveis} />
                    </Link>
                    <Link>
                        <IconStyled src={Alarme} />
                    </Link>
                    <Link>
                        <IconStyled src={Contato} />
                    </Link>
                </ConstainerIconsStyled>
            </>
        )
    }
}

export default UserHome
