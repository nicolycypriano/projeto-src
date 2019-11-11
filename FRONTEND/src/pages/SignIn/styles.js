import styled, { injectGlobal } from 'styled-components';
import back from '../../assets/bg-01.jpg'


export const H1 = styled.h1`
  color: #fff;
  font-size: 50px;
  margin-bottom: 60px;
  margin-top: 40px;
  text-align: center;
  font-weight: lighter;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 20px;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
  margin: 5px;
`;

export const Box = styled.div`
  width: 300px;
  height: 200px;
  background-color: #fff;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 15px;

  button {
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 50%;
    color: #8459A1;
    border: none;
    margin-bottom: 10px;

    :hover{
      background-position: right center;
      background-image: linear-gradient(to right, #C4A9e4, #C4A9C4 );
      box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
      color: #fff;
      font-weight: bold;
      transition: .5s;
    }
  }

  
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const Body = styled.div`
  width: 100%;
  background-image: url(${back});
  opacity: 0.6;
`;