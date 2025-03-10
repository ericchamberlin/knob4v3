import React, { createContext, useContext, useState } from 'react';

const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    grossIncome: 0,
    netIncome: 0,
    currentBalance: 0,
    allowances: 0,
    month: "January",
    housingType: "none",
    housingCost: 0,
    downPayment: 0,
    carType: "none",
    carCost: 0,
    investments: null,
    creditBalance: 0,
    loanBalance: 0,
    monthlyBudget: "balanced",
    housingChoice: "none",
    stressPoints: 0,
    decisionScore: 0,
    eventsTriggered: [],
  });

  const updateGameState = (newState) => {
    setGameState(newState);
    localStorage.setItem('gameState', JSON.stringify(newState));
  };

  return (
    <GameStateContext.Provider value={{ gameState, updateGameState }}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(GameStateContext);
  if (!context) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};