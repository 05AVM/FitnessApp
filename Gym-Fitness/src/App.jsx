/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="400px">
      <Navbar />
      <Routes>
        <h1>HII</h1>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App