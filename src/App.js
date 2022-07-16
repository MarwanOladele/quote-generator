import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(168, 166, 166, 1), rgba(168, 166, 166, 1)),
    url(images/background.jpg) no-repeat center / cover;
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
