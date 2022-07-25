import React, { Component } from "react";
import songs from "./services/songs";
import SongCard from "./components/SongCard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
        {
          id: songs.id,
          thumb: songs.thumb,
          title: songs.title,
          artist: songs.artist,
          rating: songs.rating,
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div id="super-tunes">
          <h2 id="st-title">SuperTunes - Songs of the Week</h2>
          <button className="st-btn" onClick={this.sortByTitle}>
            Select by Title
          </button>
          <button className="st-btn" onClick={this.sortByRating}>
            Select by Rating
          </button>
        </div>
        <div id="song-list">
          {songs.map((song) => (
            <SongCard
              thumb={song.thumb}
              title={song.title}
              artist={song.artist}
              rating={song.rating}
            />
          ))}
        </div>
      </>
    );
  }
}

export default App;
