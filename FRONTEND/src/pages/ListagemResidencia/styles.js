import styled from 'styled-components';

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
  margin-bottom: 10px;

  :hover{
          opacity: 0.8;
          color: #fff;
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

export const ContainerContainer = styled.div`
  display: flex;
`;
