import React, { Component } from 'react'
import Logo from '../../assets/img/logo.svg'
import { LogoStyled } from './styles'

class LogoIni extends Component {
    render() {
        return <LogoStyled src={Logo} />
    }
}

export default LogoIni
