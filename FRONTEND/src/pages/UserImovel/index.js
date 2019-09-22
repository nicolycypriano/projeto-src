import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//importando imagens
import Conj from '../../assets/img/Planta/conj.svg'
import Quarto from '../../assets/img/Planta/quarto.svg'
import Sala from '../../assets/img/Planta/sala.svg'
import Banheiro from '../../assets/img/Planta/banheiro.svg'
import Entrada from '../../assets/img/Planta/entrada.svg'

//importando componentes
import LogoIni from '../../components/Logo'
import { ImgStyled, ContainerStyled } from './styles'

class UserImovel extends Component {
    render() {
        return (
            <>
                <LogoIni />
                <ImgStyled src={Conj} />
                <ContainerStyled>
                    <Link to="imoveis/quarto">
                        <img id="quarto" src={Quarto} />
                    </Link>
                    <Link to="imoveis/sala">
                        <img id="sala" src={Sala} />
                    </Link>
                    <Link to="imoveis/banheiro">
                        <img id="banheiro" src={Banheiro} />
                    </Link>
                    <Link to="imoveis/entrada">
                        <img id="entrada" src={Entrada} />
                    </Link>
                </ContainerStyled>
            </>
        )
    }
}

export default UserImovel
