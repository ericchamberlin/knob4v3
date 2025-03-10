import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameStateProvider } from './contexts/GameStateContext';
import January from './components/January';
import Home from './components/Home';

function App() {
  return (
    <GameStateProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/january" element={<January />} />
        </Routes>
      </Router>
    </GameStateProvider>
  );
}

export default App;