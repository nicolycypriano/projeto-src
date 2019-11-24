import styled from 'styled-components';
import { darken } from "polished";


export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  ul {
    width: 100%;
    max-width: 400px;

    li {
      background: #fff;
      padding: 10px;
      width: 100%;
      margin: 0 0 10px 0;
      display: flex;
      flex-direction: column;

      a {
        color: #222;
        font-size: 16px;
      }

      button {
        border-radius: 2px;
        background: #222;
        color: #fff;
        padding: 10px;
        margin: 10px 0 0 0;
        border: none;
        background: #C99AD0;
        width: 100%;

        :hover{
          background-image: linear-gradient(#C99AE9, #C99AD0) ;
          transition: .10s;
          color: #fff;
        }
      }
    }
  }
`;

export const H1Styled = styled.h1`
  color: #fff;
  font-size: 50px;
  text-align: center;
  margin: 10px 0 10px 0;
`;

export const Button = styled.button`
  color: #f3f3f3;
  background-color: #704d89;
  border: none;
  height: 50px;
  line-height: 30px;
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 5px;

  :hover {
    background: ${darken(0.1, "#704d89")};
    transition: 300ms;
  }
`;

export const Container = styled.div`
  margin-bottom: 30px;
  b,
  li {
    color: #34213f;
    font-size: 16px;
  }
  li {
    margin-bottom: 5px;
  }
`;

export const ContainerLi = styled.div`
  border: 3px solid #fff;
  width: 300px;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  width: 120%;
  margin-left: -50px;
  color: #7f5a9d;
  margin-bottom: 5px;
  :hover {
    opacity: 0.8;
  }
`;

export const Display = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  height: 100%;
`;

export const ButtonSensorOn = styled.button`
  width: 25px;
  height: 25px;
  background-color: green;
  border-radius: 50%;
  margin: 3px;
  font-size: 10px;
  border: none;
  color: #fff;
  font-weight: bold;
  :hover {
    opacity: 0.7;
  }
`;

export const ButtonSensorOff = styled.button`
  width: 25px;
  height: 25px;
  background-color: red;
  border-radius: 50%;
  margin: 3px;
  font-size: 10px;
  border: none;
  color: #fff;
  font-weight: bold;
  :hover {
    opacity: 0.7;
  }
`;

export const ButtonAtuadorAcionar = styled.button`
  width: 40px;
  height: 20px;
  background-color: green;
  border-radius: 30%;
  margin: 3px;
  font-size: 10px;
  border: none;
  color: #fff;
  :hover {
    opacity: 0.7;
  }
`;

export const ButtonAtuadorRecuar = styled.button`
  width: 40px;
  height: 20px;
  background-color: red;
  border-radius: 30%;
  margin: 3px;
  font-size: 10px;
  border: none;
  color: #fff;
  font-weight: bold;
  :hover {
    opacity: 0.7;
  }
`;


export const BackButton = styled.button`
  color: #f3f3f3;
  background-color: #704d89;
  border: none;
  height: 50px;
  line-height: 30px;
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 2px;
  margin-bottom: 5px;
  width: 100%;

  :hover {
    background: ${darken(0.1, "#704d89")};
    transition: 300ms;
  }
`;

export const Div = styled.div`
  color: #fff;
`;