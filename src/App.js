import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

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
const Card = styled.div``;
const Advice = styled.h1``;

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
      </Card>
    </Container>
  );
};

export default App;
