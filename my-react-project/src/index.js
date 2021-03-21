import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, msg: 'Take my love, take my land ', likesCount: 12},
  {id: 2, msg: 'Take me where i cannot stand,', likesCount: 4},
  {id: 3, msg: 'i dont care, im still free, you cant take the sky from me', likesCount: 6,}
]

let dialogsData = [
  {id: 1, name: 'Yoda'},
  {id: 2, name: 'Boba-fett'},
  {id: 3, name: 'Tyler Durden'},
  {id: 4, name: 'Paul Atreides'},
  {id: 5, name: 'Borat'},
  {id: 6, name: 'Pamela'},
]

let messagesData = [
  {id: 1, msg: 'And all the girlies'},
  {id: 2, msg: 'say I`m pretty fly'},
  {id: 3, msg: 'for a white guy'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
