import styled from 'styled-components';
import { darken } from "polished";


export const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  ul {
    width: 100%;
    max-width: 400px;

    li {
      background: #fff;
      padding: 10px;
      width: 100%;
      height: 325px;
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

export const H1Styled = styled.h2`
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin: 10px;
`;

export const H1Styled2 = styled.h2`
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin: 10px;
  margin-top: -40px;
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
  margin-bottom: 10px;

  :hover {
    background: ${darken(0.1, "#704d89")};
    transition: 300ms;
  }
`;


export const Select = styled.select`
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  :nth-child(1) {
    margin-top: 30%;
  }
  padding: 10px;
  text-align: center;

  option {
    color: black;
    font-size: 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  li {
    margin-bottom: 10px;
  }



`;

export const Content2 = styled.div`
`;

export const BackButton = styled.button`
  font-size: 8px;
  color: #f3f3f3;
  background-color: #704d89;
  border: none;
  padding: 10px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  border-radius: 50%;
  margin: 10px;
  width: 30px;
  height: 30px;

  img {
    width: 8px;
    height: 8px;
  }


:hover {
    background: ${darken(0.1, "#704d89")};
    transition: 300ms;
  }
`;

