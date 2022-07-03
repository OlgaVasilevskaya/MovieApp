import {Link} from 'react-router-dom';

import './page404.scss';

import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Page404 = () => {
  return (
    <div className='page-404'>
      <ErrorMessage />
      <Link to='/'>
        <button>Go to home page</button>
      </Link>
    </div>
  )
}

export default Page404;
