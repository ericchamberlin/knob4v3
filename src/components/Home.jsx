import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  background: url('https://i.imgur.com/IuBXS4S.png') no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Card = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 40px;
  border-radius: 10px;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const StartButton = styled.button`
  font-size: 1.2rem;
  padding: 10px 30px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Card>
        <Title>Welcome to Escape From Knob!</Title>
        <Description>
          You've guessed the correct number of sand grains on a 25-mile-long beach in Australia and won a one-way ticket to the planet Knob. While rocketing through space toward Knob, you learn that the beings there, although friendly, emit a foul smell and leave a slippery slime trail as they move about.
        </Description>
        <Description>
          You also discover that the next rocket back to Earth doesn't blast off until the Fourth of July, and a ticket costs $10,000!
        </Description>
        <Description>
          Earn and save enough money on the planet Knob in order to buy your return ticket to Earth on July 4th.
        </Description>
        <StartButton onClick={() => navigate('/january')}>
          Start
        </StartButton>
      </Card>
    </Container>
  );
};

export default Home;