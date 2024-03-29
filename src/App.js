import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { mobile } from "./responsive";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("https://www.mmppicture.co.in/wp-content/uploads/2021/04/CB-Background-138-857x1080.jpg")
      no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const Card = styled.div`
  background-color: whitesmoke;
  width: 40vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 25px;
  padding: 2%;
  box-shadow: 48px 19px 123px 48px rgba(36, 26, 26, 0.78);
  -webkit-box-shadow: 48px 19px 123px 48px rgba(36, 26, 26, 0.78);
  -moz-box-shadow: 48px 19px 123px 48px rgba(36, 26, 26, 0.78);
  ${mobile({
    width: "80%",
    height: "30%",
    paddingBottom: "5%",
  })}
`;
const Advice = styled.h1`
  display: flex;
  align-items: center;
  height: 580px;
  ${mobile({
    fontSize: "16px",
  })}
`;

const Button = styled.button`
  outline: none;
  text-decoration: none;
  border-radius: 50px;
  border: 1px solid rgba(22, 76, 167, 0.6);
  cursor: pointer;
  text-transform: uppercase;
  padding: 10px 30px;
  background-color: white;
  font-size: 16px;
  ${mobile({
    fontSize: "14px",
    padding: "7px 10px",
  })}
`;

const App = () => {
  const [quote, setQuote] = useState("");

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        setQuote(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <Container>
      <Card>
        <Advice>{quote}</Advice>
        <Button onClick={fetchAdvice}>Give Me an Advise</Button>
      </Card>
    </Container>
  );
};

export default App;
