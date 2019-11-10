import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const H1Styled = styled.div`
  width: 100%;
  h1 {
    color: #fff;
    font-size: 30px;
    width: 100%;
    text-align: center;
    display: table;
    align-items: center;
    justify-content: center;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  margin: 20px 0;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  display: flex;
  border-radius: 2px;
  border: none;
  padding-left: 15px;
  font-size: 16px;
  margin: 0 0 10px 0;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const FieldErrorMessage = styled.span`
  color: red;
  font-size: 16px;
`;

export const Button = styled.button`
  color: #f3f3f3;
  background-color: #704d89;
  border: none;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  border-radius: 2px;
  
  :hover {
    background: ${darken(0.1, "#704d89")};
    transition: 300ms;
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
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;