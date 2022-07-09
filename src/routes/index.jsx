import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Movies from '../components/Movies';
import Header from '../components/Header';
import Details from '../components/Details';
import NotFoundPage from '../components/NotFoundPage';
import ScrollUp from '../components/ScrollUp/ScrollUp';

const AppRoutes = () => (
  <Router>
    <Header />
    <ScrollUp />

    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/movie/:eventId' element={<Details />} />
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  </Router>
)

export default AppRoutes;
