import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';

function Login() {
  const loginUrl = 'http://localhost:8090/login';
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const context_userId = useContext(UserContext);
  const [userId, setUserId] = useState(context_userId);

  let inputStyles =
    'bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal my-3';

  const tryLogin = () => {
    console.log('Entering tryLogin');
    console.log('Username: ' + userName);
    console.log('Password: ' + userPassword);
    axios
      .post(loginUrl, {
        username: userName,
        password: userPassword,
      })
      .then(function (response) {
        console.log(response.data);
        setUserId(response.data);
        window.location.replace('/recipes');
        console.log('UserId: ' + userId);
      })
      .catch(function (error) {
        console.log(error);
        alert('Login failed');
      });
  };

  return (
    <div>
      <input
        type='text'
        required
        placeholder='Username'
        onChange={(e) => setUserName(e.target.value)}
        className={inputStyles}
      ></input>

      <input
        type='password'
        required
        placreholder='Password'
        onChange={(e) => setUserPassword(e.target.value)}
        className={inputStyles}
      ></input>

      <button className='bg-blue-500 text-white p-3 w-full' onClick={tryLogin}>
        {' '}
        Login
      </button>
    </div>
  );
}

export default Login;
