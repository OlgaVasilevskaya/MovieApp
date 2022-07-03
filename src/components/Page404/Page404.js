import {Link} from 'react-router-dom';

import './page404.scss';

const Page404 = () => {
  return (
    <div className='page-404'>
      <p>404 not wound, we have no such page</p>
      <Link to='/'>
        <button>Go to home page</button>
      </Link>
    </div>
  )
}

export default Page404;
