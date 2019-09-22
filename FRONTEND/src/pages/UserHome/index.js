import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//importando imagens
import Perfil from '../../assets/img/userPerfil.svg'
import Imoveis from '../../assets/img/userImoveis.svg'
import Alarme from '../../assets/img/userAlarme.svg'
import Contato from '../../assets/img/userContato.svg'

//importando componentes
import LogoIni from '../../components/Logo'
import Icon from '../../components/Icon'
import {
    TitleH1Styled,
    TitleH2Styled,
    ConstainerIconsStyled,
    IconStyled
} from './styles'

class UserHome extends Component {
    render() {
        return (
            <>
                <LogoIni />
                <TitleH1Styled>Sistema de Controle Residencial</TitleH1Styled>
                <TitleH2Styled>Olá, usuário!</TitleH2Styled>
                <ConstainerIconsStyled>
                    <Link to="/usuario/perfil">
                        <IconStyled src={Perfil} />
                    </Link>
                    <Link to="/usuario/imoveis">
                        <IconStyled src={Imoveis} />
                    </Link>
                    <Link to="/usuario/alarme">
                        <IconStyled src={Alarme} />
                    </Link>
                    <Link to="/usuario/contato">
                        <IconStyled src={Contato} />
                    </Link>
                </ConstainerIconsStyled>
            </>
        )
    }
}

export default UserHome
