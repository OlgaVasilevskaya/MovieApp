import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import SearchInput from '../SearchInput';

import logo from '../../assets/img/video-camera.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './header.scss';

const Header = (props) => {
  const { setIsOpen } = props;

  const [isAuthrized, setIsAuthrized] = useState('');

  useEffect(() => {
    const isAuth = localStorage.getItem('isUserAuthrized');

    setIsAuthrized(isAuth)
  }, []);

  const handleSignOut = () => {
    localStorage.setItem('isUserAuthrized', '');
    setIsAuthrized('');
  }

  window.addEventListener('storage', (e) => {
    // console.log('eeevent', e);

    setIsAuthrized(e.value);
//если кто-то зарегистр и поменялась переменная isAuthrized, ее нужно здесь изменить
  })

  const navigate = useNavigate();

  const switchToProfile = () => {
    navigate('../users-profile');
  }

  return (
    <div className='header'>
      <img src={logo} alt="logo" />

      <SearchInput />

      {isAuthrized
        ? 
        <>
          <div>
            Hello, {isAuthrized} 
            <AccountCircleIcon onClick={switchToProfile} />
            <button onClick={handleSignOut}>Sign out</button>
          </div>
        </>
        : <button className="clickme" onClick={setIsOpen}>Sign in</button>
      }
    </div>
  );
}

export default Header;
