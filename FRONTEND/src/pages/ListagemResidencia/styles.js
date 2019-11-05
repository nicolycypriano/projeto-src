import styled from 'styled-components';

export const H1Styled = styled.h1`
  color: #fff;
  font-size: 50px;
  text-align: center;
  display: table;
  margin-right: 10px;
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
  margin-top: 30px;
  border-radius: 10px;
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

  li {
    margin-bottom: 10px;
  }



`;

export const ContainerContainer = styled.div`
  display: flex;
`;


export const ContainerLi = styled.div`
  border: 3px solid #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  color: #7D5A9B;
  width: 120%;
  margin-left: -50px;
  margin-bottom: 10px;

  :hover{
    opacity: 0.8;
  }
`;