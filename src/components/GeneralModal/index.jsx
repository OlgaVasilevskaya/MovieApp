import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

import './generalModal.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const { isActive, setIsActive } = props;

  const [formType, setFormType] = useState(true);

  const [email, setEmail] = useState('');

  const [firstName, setFirstName] = useState('');

  const [lastName, setLastName] = useState('');

  const [phone, setPhone] = useState('');

  const [password, setPassword] = useState('');

  const [repeatPassword, setRepeatPassword] = useState('');

  const [formError, setFormError] = useState('');

  const [isAuth, setIsAuth] = useState(false);

  const [isUserAuthrized, setIsUserAuthrized] = useState(false);

  const [isIncorrectEmail, setIsIncorrectEmail] = useState(false);

  const handleOpen = () => setIsActive(true);

  const handleClose = () => {
    setIsActive(false);
  }

  const handleSubmit = () => {
    const re = /\S+@\S+\.\S+/;

    const result = re.test(email);

    if(!result) {
      setIsIncorrectEmail('Incorrect email');
    } else {
      setIsIncorrectEmail('');
    }

    if((password === repeatPassword)) {
      setFormError('');
    } else {
      setFormError('Passwords are not equal');

      const event = new StorageEvent('storage', {
        key: 'isUserAuthrized',
        newValue: 'email'
      });

      window.dispatchEvent(event);
    }

    const usersJson = localStorage.getItem('users');
    const users = JSON.parse(usersJson) || [];

    const newUser ={
      isAuth: false,
      email,
      password,
      firstName,
      lastName,
      phone
    }

    localStorage.setItem('users', JSON.stringify([...users, newUser]));

    const isEmailExist = users.find(item => item.email === email);

    if(isEmailExist) {
      setIsAuth('Email address already registered');
    } else {
      setIsAuth('You have successfully signed up, now you can log in to the app');
    }

    if(isEmailExist.password === password) {
      localStorage.setItem('isUserAuthrized', email);
      setIsUserAuthrized(email);
      users.isAuth=true;
    }
  };

  const handleChangeInput = (type) => (e) => {
    switch (type) {
      case 'email':
        setEmail(e.target.value);

      break;

      case 'password':
        setPassword(e.target.value);

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

      default:
        console.log('type', type);
    }
  }

  const handleSignUp = () => {
    //successfully signed in
    //isUserAuthorized
    setFormType(false);
  }

  const handleSignIn = () => {
    setFormType(true);
  };

  // const validateEmail = (email) => {
  //   const re = /\S+@\S+\.\S+/;

  //   return re.test(email);
  // };

  return (
    <>
      <Modal
        open={isActive}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
      >
        {
          formType
          ? 
            (<Box sx={style}>
              <h2>Sign in</h2>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <TextField 
                onChange={handleChangeInput('email')}
                value={email}
                id="outlined-basic1" 
                label="Email" 
                variant="outlined" 
                type="text"/>

                <TextField 
                onChange={handleChangeInput('password')}
                value={password}
                id="outlined-basic2" 
                label="Password" 
                variant="outlined" 
                type="password"/>
              </Typography>

              <footer className="modal-footer">

                <button onClick={handleSubmit} className="submit" disabled={(!email, !password)}>
                  Sign in
                </button>

                <p>
                  Don't have an account yet? 
                  <button onClick={handleSignUp}>
                    Create one.
                  </button>
                </p>
              </footer>
            </Box>)
          : 
            (<Box sx={style}>
              <h2>Sign up</h2>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <TextField 
                onChange={handleChangeInput('email')}
                value={email}
                id="outlined-basic3" 
                label="Email" 
                variant="outlined" 
                type="text"/>

                <TextField 
                onChange={handleChangeInput('firstName')}
                value={firstName}
                id="outlined-basic4" 
                label="First Name" 
                variant="outlined" 
                type="text"/>

                <TextField 
                onChange={handleChangeInput('lastName')}
                value={lastName}
                id="outlined-basic5" 
                label="Last Name" 
                variant="outlined" 
                type="text"/>

                <TextField 
                onChange={handleChangeInput('phone')}
                value={phone}
                id="outlined-basic6" 
                label="Phone" 
                variant="outlined" 
                type="text"/>

                <TextField 
                onChange={handleChangeInput('password')}
                value={password}
                id="outlined-basic7" 
                label="Password" 
                variant="outlined" 
                type="password"/>

                <TextField 
                onChange={handleChangeInput('repeatPassword')}
                value={repeatPassword}
                id="outlined-basic8" 
                label="Repeat Password" 
                variant="outlined" 
                type="password"/>
              </Typography>

              <footer className="modal-footer">
                <div>{formError}</div>
                <div>{isAuth}</div>
                <div>{isIncorrectEmail}</div>

                <button onClick={handleSubmit} className="submit" disabled={(!email, !firstName, !lastName, !phone, !password, !repeatPassword)}>
                  Sign up
                </button>

                <button onClick={handleSignIn} className="submit">
                  Go to sign in
                </button>
              </footer>
            </Box>)
        }
      </Modal>
    </>
  );
}
