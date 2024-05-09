import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/profile';
import Jobs from './pages/jobs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>
    </Router>
  );
};

export default App;
