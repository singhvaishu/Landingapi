"use client"
import React from 'react';
// import HomePage from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import { Provider } from 'react-redux';
import store from './redux/features/store'
import './globals.css';
import Login from './redux/features/auth/Login';

function App() {
  return (
    // <div className="App">
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
