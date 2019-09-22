import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Area, Circles, ContainerStyled, ImgStyled } from './styles'
import User from '../../../../assets/img/Usuario.svg'
// import Projetista from '../../../../assets/img/Projetista.svg'

class BackgroundAnimate extends Component {
    render() {
        return (
            <Area>
                <Circles>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </Circles>
                <ContainerStyled>
                    <p>Escolha o seu perfil</p>
                    <div>
                        <Link to="/usuario">
                            <ImgStyled src={User}></ImgStyled>
                        </Link>
                        {/* <Link to="/projetista">
                            <ImgStyled src={User}></ImgStyled>
                        </Link> */}
                    </div>
                </ContainerStyled>
            </Area>
        )
    }
}

export default BackgroundAnimate
