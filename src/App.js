import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
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
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 25px;
  padding: 2%;
  box-shadow: 48px 19px 123px 48px rgba(36, 26, 26, 0.78);
  -webkit-box-shadow: 48px 19px 123px 48px rgba(36, 26, 26, 0.78);
  -moz-box-shadow: 48px 19px 123px 48px rgba(36, 26, 26, 0.78);
`;
const Advice = styled.h1`
  display: flex;
  align-items: center;
  height: 580px;
`;

const Button = styled.button``
const Span = styled.span``


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
        <Button>
            <Span>Give Me Advise</Span>
        </Button>
      </Card>
    </Container>
  );
};

export default App;
