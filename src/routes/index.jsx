import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Movies from '../components/Movies/Movies';
import Header from '../components/Header/Header';
import Details from '../components/Details/Details';
import Page404 from '../components/Page404/Page404';

const AppRoutes = () => (
  <Router>
    <Header />

    <Routes>
      <Route path='/' element={<Movies />} />
      <Route path='/movie/:eventId' element={<Details />} />
      <Route path='*' element={<Page404 />}></Route>
    </Routes>
  </Router>
)

export default AppRoutes;
