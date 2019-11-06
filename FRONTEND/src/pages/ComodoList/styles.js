import styled from 'styled-components';

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
