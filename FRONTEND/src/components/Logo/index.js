import React, { Component } from 'react'
import Logo from '../../assets/img/logoVector.svg'
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
