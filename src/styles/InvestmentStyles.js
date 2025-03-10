import styled from 'styled-components';

export const ProceedButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export const InvestmentGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const InvestmentOption = styled.div`
  background: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;

  h3 {
    margin: 0 0 10px 0;
    font-size: 1.1em;
    color: #333;
  }

  p {
    margin: 5px 0;
    font-size: 0.95em;
  }

  input {
    width: 200px;
    padding: 8px;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const MayHeader = styled.div`
  margin-bottom: 15px;
`;

export const InvestmentMessage = styled.div`
  margin: 20px 0;
  font-size: 1.1em;
  line-height: 1.6;
`;

export const InvestButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FinalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  max-width: 400px;
  width: 90%;
`;

export const FinalImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: 10px 0;
  border-radius: 8px;
`;

export const FinalMessageOverlay = styled.div`
  font-size: 1.1em;
  margin: 15px 0;
  text-align: center;
  color: #333;
`;

export const OverlayBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: ${props => props.isVisible ? 'block' : 'none'};
`;