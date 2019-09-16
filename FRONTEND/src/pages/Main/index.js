import React from 'react'

import { FaGithubAlt, FaPlus } from 'react-icons/fa'
import { ContainerStyled, FormStyled, SubmitButtonStyled } from './styles'
import BackgroundAnimate from './Components/BackgroundAnimate'

function Main() {
    return (
        <BackgroundAnimate>
            <ContainerStyled>
                <h1>Hello World</h1>
            </ContainerStyled>
        </BackgroundAnimate>
    )
}

export default Main
