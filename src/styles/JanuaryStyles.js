import styled from 'styled-components';

export const JanuaryWrapper = styled.div`
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: url('https://i.imgur.com/IuBXS4S.png') no-repeat center center fixed;
  background-size: cover;
  color: #333;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PersonalInfo = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
`;

export const MainContent = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
`;

export const Button = styled.button`
  font-size: 1rem;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const InfoIcon = styled.span`
  cursor: pointer;
  font-size: 1.2em;
  margin-left: 10px;
  color: #333;
`;

export const InfoPanel = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1002;
  max-width: 90%;
  width: 80%;
  max-height: 80%;
  overflow-y: auto;
  border-radius: 8px;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;

export const Title = styled.h2`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

export const NextButton = styled(Button)`
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;