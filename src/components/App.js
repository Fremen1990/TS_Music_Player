import React, { useEffect, useState } from "react";
import { Heading } from "./Heading";
import { Songs } from "./Songs";
import { SongListItem } from "./SongListItem";
import { SongPlayer } from "./SongPlayer";
import "./App.css";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import FindMusic from "../pages/FindMusic";
import Layouts from "../pages/Layouts";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
// ADD HAMBURGER NAV MENU WITH:  LOGIN, LOGUT, LAUOUT THREE COLORS: ORANGE/BLACK, WHITE AND BLACK/GRAY
// ADD SEARCH INPUT
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

export function App() {
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

  function handleChangeToPreviousSong() {
    if (currentSongIndex > 0) {
      setCurrentSongIndex((prevState) => prevState - 1);
    }
    if (currentSongIndex === 0) {
      setCurrentSongIndex(songs.length - 1);
    }
  }

  function handleChangeToNextSong() {
    if (currentSongIndex >= 0) {
      setCurrentSongIndex((prevState) => prevState + 1);
    }
    if (currentSongIndex === songs.length - 1) {
      setCurrentSongIndex(0);
    }
  }

  function handleRandomSong() {
    const randomSong = Math.floor(Math.random() * songs.length);
    setCurrentSongIndex(randomSong);
  }

  return (
    <div className="App">
      {songs.length === 0 ? (
        "Loading..."
      ) : (
        <>
          {/* <HamburgerMenu /> */}
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/findmusic" exact component={FindMusic} />
              <Route path="/layouts" exact component={Layouts} />
            </Switch>
          </Router>

          <SongPlayer
            isLooped
            song={currentSong}
            handleChangeToNextSong={handleChangeToNextSong}
            handleChangeToPreviousSong={handleChangeToPreviousSong}
            handleRandomSong={handleRandomSong}
          />
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
