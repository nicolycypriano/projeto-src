import styled from 'styled-components'

//Div geral
export const Area = styled.div`
    background: #81259d;
    background: -webkit-linear-gradient(to left, #81259d, #e3e3e3);
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
//Circulos que ficam no ar
export const Circles = styled.ul`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    li {
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: #e3e3e334;
        animation: animate 25s linear infinite;
        bottom: -150px;
    }

    li:nth-child(1) {
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }

    li:nth-child(2) {
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    li:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    li:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    li:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }

    li:nth-child(6) {
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }

    li:nth-child(7) {
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }

    li:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    li:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    li:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }

    @keyframes animate {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }

        100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }
    }
`

//Div branca
export const ContainerStyled = styled.div`
    width: 448px;
    height: 549px;
    left: 736px;
    top: 265px;
    background-color: #fefefe;
    border-radius: 10px;

    z-index: 10;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    p {
        color: #a0a0a0;
        font-size: 18px;
        text-align: center;
        margin-top: 146px;
        font-weight: lighter;
    }

    div {
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
    }

    img {
        margin-top: 89px;
        padding: 10px;
        width: 110px;
        height: 110px;
    }
`
