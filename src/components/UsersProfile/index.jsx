import React, { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';

import './usersProfile.scss';

const UsersProfile = () => {
  const [isAuthrized, setIsAuthrized] = useState('');

  const [email, setEmail] = useState('');

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [phone, setPhone] = useState('');

  const [birthday, setBirthday] = useState('');

  const [city, setCity] = useState('');

  const [sex, setSex] = useState('');

  const [oldPassword, setOldPassword] = useState('');

  const [newPassword, setNewPassword] = useState('');

  const [repeatPassword, setRepeatPassword] = useState('');

  const [formError, setFormError] = useState('');

  useEffect(() => {
    const isAuth = localStorage.getItem('isUserAuthrized');

    setIsAuthrized(isAuth)
  }, []);

  const handleSave = () => {
    if((newPassword === repeatPassword)) {
      setFormError('');
    } else {
      setFormError('Passwords are not equal');
    }
  }

  const handleChangeInput = (type) => (e) => {
    switch (type) {
      case 'email':
        setEmail(e.target.value);

      break;

      case 'oldPassword':
        setOldPassword(e.target.value);

      break;

      case 'firstName':
        setFirstName(e.target.value);

      break;

      case 'lastName':
        setLastName(e.target.value);

      break;

      case 'phone':
        setPhone(e.target.value);

      break;

      case 'repeatPassword':
        setRepeatPassword(e.target.value);

      break;

      case 'birthday':
        setBirthday(e.target.value);

      break;

      case 'city':
        setCity(e.target.value);

      break;

      case 'sex':
        setSex(e.target.value);

      break;

      case 'newPassword':
        setNewPassword(e.target.value);

      break;

      default:
        console.log('type', type);
    }
  }

  return (
    <div className='profile'>
      <TextField 
      onChange={handleChangeInput('email')}
      value={isAuthrized}
      id="outlined-basic1" 
      label="email" 
      variant="outlined" 
      type="text"
      />

      <TextField 
      onChange={handleChangeInput('firstName')}
      value={firstName}
      id="outlined-basic2" 
      label="firstName" 
      variant="outlined" 
      type="text"
      />

      <TextField 
      onChange={handleChangeInput('lastName')}
      value={lastName}
      id="outlined-basic3" 
      label="lastName" 
      variant="outlined" 
      type="text"
      />

      <TextField 
      onChange={handleChangeInput('phone')}
      value={phone}
      id="outlined-basic4" 
      label="phone" 
      variant="outlined" 
      type="text"
      />

      <TextField 
      onChange={handleChangeInput('birthday')}
      value={birthday}
      id="outlined-basic5" 
      label="birthday" 
      variant="outlined" 
      type="text"
      />

      <TextField 
      onChange={handleChangeInput('city')}
      value={city}
      id="outlined-basic6" 
      label="city" 
      variant="outlined" 
      type="text"
      />

      <TextField 
      onChange={handleChangeInput('sex')}
      value={sex}
      id="outlined-basic7" 
      label="sex" 
      variant="outlined" 
      type="text"
      />

      <TextField 
      onChange={handleChangeInput('oldPassword')}
      value={oldPassword}
      id="outlined-basic8" 
      label="oldPassword" 
      variant="outlined" 
      type="password"
      />

      <TextField 
      onChange={handleChangeInput('newPassword')}
      value={newPassword}
      id="outlined-basic9" 
      label="newPassword" 
      variant="outlined" 
      type="password"
      />

      <TextField 
      onChange={handleChangeInput('repeatPassword')}
      value={repeatPassword}
      id="outlined-basic10" 
      label="repeatPassword" 
      variant="outlined" 
      type="password"
      />

      <button onClick={handleSave}>Save</button>

      <div>{formError}</div>
    </div>
  )
}

export default UsersProfile;
