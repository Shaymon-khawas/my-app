import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import WelcomePage from './Pages/WelcomePage';
import BlockedPage from './Pages/BlockedPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/blocked" element={<BlockedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
