import React, { Component } from 'react'

import { Area, Circles, ContainerStyled } from './styles'
import User from '../../../../assets/img/Usuario.svg'
import Projetista from '../../../../assets/img/Projetista.svg'

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
                        <img src={User} />
                        <img src={Projetista} />
                    </div>
                </ContainerStyled>
            </Area>
        )
    }
}

export default BackgroundAnimate
