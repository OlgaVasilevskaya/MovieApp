import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Movies from '../components/Movies/Movies';
import Header from '../components/Header/Header';
import Details from '../components/Details/Details';

const AppRoutes = () => (
  <Router>
    <Header />

    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/movie/:eventId' element={<Details />} />
    </Routes>
  </Router>
)

export default AppRoutes;