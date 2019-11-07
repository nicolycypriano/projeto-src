import styled from 'styled-components';

export const Img = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
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
    border-radius: 2px;
    background: #222;
    color: #fff;
    padding: 10px;
    margin: 10px 0 0 0;
    border: none;
    background: rgb(113, 52, 161);
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 100%;
    height: 30px;
    display: flex;
    border-radius: 2px;
    border: none;
    padding-left: 15px;
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
