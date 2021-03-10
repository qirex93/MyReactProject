import React from 'react';
import './App.css'

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://free-images.com/or/8a4e/lion_head_isolated_art.jpg' />
      </header>
      <nav className='nav'>
        <div>
          Profile
        </div>
        <div>
          Messages
        </div>
      </nav>

      <div className='content'>

        <div>
          <img src='https://photoshop-kopona.com/uploads/posts/2018-03/1521289405_17-8.jpg' />
        </div>

        <div>
          <img src='https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg' />
        </div>

        <div>
          My posts
        </div>

        <div>
          New post
        </div>

        <div>
          post 1
        </div>

        <div>
          post 2
        </div>

      </div>

      <footer>

      </footer>

    </div>
  );
}

export default App;
