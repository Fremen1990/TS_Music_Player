import "./styles.css";
import React, { useEffect, useRef, useState } from "react";

//napster API
// const APIkey = "MWNiZjM1OTctYmRmYS00ODNhLTlkOTYtZDhkOTE0MzY3ODVl";
// const albumCoverLink = `http://direct.rhapsody.com/imageserver/v2/albums/${albumId}/images/300x300.jpg`
// const API = `https://api.napster.com/v2.1/tracks/top?apikey=${APIkey}`;
// const top10TracksForAnArtisAPI = `http://api.napster.com/v2.2/artists/Art.28463069/tracks/top?apikey=${APIkey}&limit=10`;
// const albumImagesAPI = `http://api.napster.com/v2.2/albums/Alb.54719066/images?apikey=${APIkey}`;
// const trackByArtistAlbumOrShortucTrack = `http://api.napster.com/v2.2/tracks/${artistName}/${albumName}/${songName}=${APIkey} `;
// const searchByArtist = `http://api.napster.com/v2.2/search?apikey=${APIkey}&query=${artistaName}&type=artist`

// -------------

// FEATHERS:
//CHANGE BUTTON PLAY TO PAUSE AND CHANGE HANDLER WITH A FLAG "TOGGLE CLASS
//DODAC PASEK DO PRZEWIJANIA UTWORU
//ADDITIONAL BUTTONS:
// RANDOM SONG FROM THE LIST
// LOOP THE SONG
// LOOP THE LIST
// VOLUME BUTTON
//DETAILS ABOUT THE ARTIST

//STYLE:
// HAMBURGER ANIMATION WITH LAYOUT OPTIONS:
// NIGHT PANEL
// LIGHT PANEL
//ORANGE PANEL
// GREEN PANEL

// API WITH INPUT
// API FOR ARTIST INFO
// API FOR SONG LYRICS

function Heading({ title }) {
  return (
    <h1>
      {title}
      <span role="img" aria-label="sheep">
        🎧
      </span>
    </h1>
  );
}

function SongPlayer({ showControls = false, song, isLooped = true }) {
  const audioRef = useRef();
  console.log("render", audioRef);
  const { audioUrl, coverUrl, artist, title } = song;
  return (
    <section className="SongPlayer">
      <Heading title="TS Music Player " />
      <img width="400" height="400" src={coverUrl} alt="Song cover" />

      <h2>{artist}</h2>
      <h3>{title}</h3>

      <audio
        ref={audioRef}
        key={audioUrl}
        controls={showControls}
        loop={isLooped}
      >
        <source src={audioUrl} />
      </audio>

      <div>
        <button onClick={() => audioRef.current.play()}>Play</button>
        <button onClick={() => audioRef.current.pause()}>Pause</button>
      </div>
    </section>
  );
}

function Songs({ children }) {
  return <section className="Songs">{children}</section>;
}

function SongListItem({ song, isCurrent, onSelect }) {
  function handleClick() {
    onSelect(song);
  }
  return (
    <li
      className={`SongListItem ${isCurrent ? "selected" : ""}`}
      onClick={handleClick}
    >
      {song.title} by {song.artist} {isCurrent && "*"}
    </li>
  );
}

export default function App() {
  const URL = "https://examples.devmastery.pl/songs-api/songs";

  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
        response.json().then(setSongs);
      }
    });
  }, []);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];
  function handleSelectSong(selectedSong) {
    const audioIndex = songs.findIndex(
      (song) => song.audioUrl === selectedSong.audioUrl
    );
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }
  }

  return (
    <div className="App">
      {songs.length === 0 ? (
        "Loading..."
      ) : (
        <>
          <SongPlayer isLooped song={currentSong} />
          <Songs>
            <>
              <Heading title="Songs" />
              <ul>
                {songs.map((song) => (
                  <SongListItem
                    key={song.audioUrl}
                    song={song}
                    isCurrent={currentSong.audioUrl === song.audioUrl}
                    onSelect={handleSelectSong}
                  />
                ))}
              </ul>
            </>
          </Songs>
        </>
      )}
    </div>
  );
}
