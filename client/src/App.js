import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from 'components/appBar/appBar';
import HomePage from 'pages/home/Home';
import EventPage from 'pages/event/Event';
import HistogramComponent from 'components/histogram/Histogram';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/histogram" element={<HistogramComponent />} />
      </Routes>
    </div>
  );
}

export default App;
