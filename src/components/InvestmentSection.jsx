import React from 'react';
import {
  InvestmentGrid,
  InvestmentOption,
  InvestButton,
  ProceedButton,
  // ... import other styled components as needed
} from '../styles/InvestmentStyles';

const InvestmentSection = ({ onInvest }) => {
  return (
    <InvestmentGrid>
      <InvestmentOption>
        <h3>Stock Investment</h3>
        <p>Invest in the growing deodorant market</p>
        <input type="number" placeholder="Enter amount" />
      </InvestmentOption>
      {/* Add other investment options */}
      <InvestButton onClick={onInvest}>Confirm Investment</InvestButton>
    </InvestmentGrid>
  );
};

export default InvestmentSection;