import React, { Component } from 'react'
import Logo from '../../assets/alarme.svg'
import { Link } from 'react-router-dom'
import { LogoStyled } from './styles'

class LogoIni extends Component {
    render() {
        return (
            <Link to="/">
                <LogoStyled src={Logo} />
            </Link>
        )
    }
}

export default LogoIni
