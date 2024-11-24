import './style.css';

import React from 'react';

const Hobbies = () => {
  return (
    <div className="hobbies-page">
      {/* Header Section */}
      <header className="hobbies-content">
        <h1>My Hobbies</h1>
        <p>A glimpse into the things I enjoy in my free time.</p>
      </header>

      {/* Hobbies Content */}
      <section className="hobbies-content">
        <div className="hobby-item">
          <h2>Watching Movies</h2>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/075/126/original/istockphoto-1342504764-612x612.jpg?1680562065"
            alt="Watching Movies"
            className="hobby-image"
          />
          <p>
            I love immersing myself in different stories, genres, and perspectives through movies. 
            Whether it's a classic drama, an action-packed blockbuster, or an indie gem, movies are my window to creativity and adventure.
          </p>
        </div>
        <div className="hobby-item">
          <h2>Watching Anime</h2>
          <img
            src="https://canime.wordpress.com/wp-content/uploads/2011/06/anime-watching.jpg"
            alt="Watching Anime"
            className="hobby-image"
          />
          <p>
            Anime is one of my favorite pastimes! From epic tales of adventure to heartfelt slice-of-life stories, 
            I enjoy the rich storytelling and unique art styles that anime offers. Some of my favorite series include [Your Favorite Anime Titles].
          </p>
        </div>
      </section>

    </div>
  );
};

export default Hobbies;
