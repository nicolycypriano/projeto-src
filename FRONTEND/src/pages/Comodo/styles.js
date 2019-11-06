import styled from 'styled-components';

export const H1Styled = styled.h1`
  color: #fff;
  font-size: 50px;
  text-align: center;
  display: table;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  color: #f3f3f3;
  background-color: #704d89;
  border: none;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  margin-top: 30px;
  border-radius: 10px;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 30%;
  margin-right: 30%;
`;

export const ContainerContainer = styled.div`
  display: flex;
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

export const Input = styled.input`
  width: 100%;
  height: 30px;
  display: flex;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  :nth-child(1) {
    margin-top: 30%;
  }
  padding: 10px;
  text-align: center;
`;
