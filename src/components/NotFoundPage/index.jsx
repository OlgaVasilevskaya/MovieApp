import React from 'react';
import {Link} from 'react-router-dom';

import ErrorMessage from '../ErrorMessage';

import './notFoundPage.scss';

const NotFoundPage = () => {

  return (
    <div className='page-404'>
      <ErrorMessage />

      <Link to='/'>
        <button>Go to home page</button>
      </Link>
    </div>
  )
}

export default NotFoundPage;
