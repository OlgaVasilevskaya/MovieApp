import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Movies from '../components/Movies';
import Header from '../components/Header';
import Details from '../components/Details';
import NotFoundPage from '../components/NotFoundPage';
import ScrollUp from '../components/ScrollUp';
import GeneralModal from '../components/GeneralModal';

const AppRoutes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  }

  return (
  <Router>
    <Header setIsOpen={handleClick}/>
    <ScrollUp />

    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/movie/:eventId' element={<Details />} />
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>

    <GeneralModal isActive={isModalOpen} setIsActive={setIsModalOpen}/>
  </Router>
)}

export default AppRoutes;
