import React from 'react'

import { FaGithubAlt, FaPlus } from 'react-icons/fa'
import { ContainerStyled, FormStyled, SubmitButtonStyled } from './styles'
import BackgroundAnimate from './Components/BackgroundAnimate'

function Main() {
    return (
        <>
            {/* //{' '}
            <ContainerStyled>
                // <FaGithubAlt />
                // //{' '}
                <FormStyled onSubmit={() => {}}>
                    // <input type="text" />
                    //{' '}
                    <SubmitButtonStyled disabled>
                        // <FaPlus color="#FFF" size={14} />
                        //{' '}
                    </SubmitButtonStyled>
                    //{' '}
                </FormStyled>
                //{' '}
            </ContainerStyled>
            <h1>Repositórios</h1> */}
            <BackgroundAnimate />
        </>
    )
}

export default Main
