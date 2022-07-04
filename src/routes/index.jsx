import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Movies from '../components/Movies/Movies';
import Header from '../components/Header/Header';
import Details from '../components/Details/Details';
import NotFoundPage from '../components/NotFoundPage/NotFoundPage';

const AppRoutes = () => (
  <Router>
    <Header />

    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/movie/:eventId' element={<Details />} />
      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
  </Router>
)

export default AppRoutes;
