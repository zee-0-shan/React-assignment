import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const information={
  name: "Alan Ford",
  id: "00005152",
  appointment: "9:00 (24-05-2016)",
  email : "alan.form@email.nl",
  phone : "+31123456789",
  status : "In progress",
  door : "Mark",
  time : "10:30 (25-05-2016)",
  profile_pic : 'https://www.w3schools.com/howto/img_avatar.png',
  candidate : "Boltaart Bosbessen"
}

ReactDOM.render(
  <React.StrictMode>
    <App information={information}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
