import styled from "styled-components";
import bg from '../../assets/bg.png';


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
`;

export const Form = styled.form`
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60%;
  border-radius: 10px;
  opacity: 1;
  text-align: center;

  img {
    width: 100px;
    margin: 10px 0 40px;
  }
  p {
    color: #ff3333;
    margin-bottom: 15px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 100%;
    text-align: center;
  }
  input {
    flex: 1;
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
    height: 30px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    /* color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%; */
    width: 100%;
    height: 50px;
    background-color: #8459A1;
    border-radius: 50%;
    color: #FFF;
    border: none;
    margin-bottom: 10px;
    border-radius: 5px;

    :hover{
      background-position: right center;
      background-image: linear-gradient(to right, #C4A9e4, #C4A9C4 );
      box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
      color: #fff;
      font-weight: bold;
      transition: .5s;
    }
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
`;