import './styles.css'
import React, {useState} from 'react';

//napster API 
const APIkey= 'MWNiZjM1OTctYmRmYS00ODNhLTlkOTYtZDhkOTE0MzY3ODVl';
// const albumCoverLink = `http://direct.rhapsody.com/imageserver/v2/albums/${albumId}/images/300x300.jpg`


// RANDOM SONG FROM THE LIST
// LOOP THE SONG
// LOOP THE LIST
// NIGHT PANEL
// LIGHT PANEL
//ORANGE PANEL
// GREEN PANEL

// API WITH INPUT
// API FOR ARTIST INFO
// API FOR SONG LYRICS

function FetchNapster(){
  const [name, setName] = useState("");
  const [artistaNme, setArtistName] = useState("");
  const [albumName, setAlbumName] = useState("");
  // const [err, setErr] = useState(false);

    const API = `https://api.napster.com/v2.1/tracks/top?apikey=${APIkey}`;
    
    fetch(API)
          .then(response => {
            if (response.ok) {
              return response
            }
            throw Error("Not working")
          })
          .then(response => response.json())
          .then(data => {
              // this.setErr= false,
             name = this.setName.data.tracks.name,
              artistaNme = this.setArtistName=data.tracks.artistName,
             albumName = this.setAlbumName=data.tracks.albumName});
  
    const napsterSongs ={
    }
}


function Heading({title}){
  return    <h1>{title}</h1>
}

function SongPlayer({showControls = true, song , isLooped=true, }){
  const {audioURL, coverURL, artist, title} = song;
  return(
 <section>
    <Heading title="TS Music Player!! :) "/>
    <img width="400" height="400" src={coverURL} alt="Song cover"/>

            <h2>{artist}</h2>
            <h3>{title}</h3>

    <audio key={audioURL} controls={showControls} loop={isLooped} >
      <source src={audioURL} />
    </audio>
 </section>
  )
}


function SongListItem({song}){
return(
  <li >{song.title} by {song.artist}</li>
)
}

export default function App () {

 
const songs = [

  {audioURL:'http://devthomas.pl/CoolProjects/MusicPlayer/MusicPlayer/MP3/T.S.%20-%20Lazare%20-%20Stell%20For%20Humans%20+%20Vocal%20v1.mp3',
  coverURL:'https://i1.sndcdn.com/artworks-000082317473-tqckdp-t500x500.jpg',
  artist: 'TS',
  title: "Sivler for the monsters"},

  {audioURL:'http://examples.devmastery.pl/assets/audio/deadfro5h.mp3',
  coverURL:'http://examples.devmastery.pl/assets/audio/deadfro5h.jpg',
  artist: 'starfrosh',
  title: "Deadfro5h"},

  {audioURL:'http://examples.devmastery.pl/assets/audio/majesty.mp3',
  coverURL:'http://examples.devmastery.pl/assets/audio/majesty.jpg',
  artist: 'Ryan Craig Martin',
  title: "Majesty (Original Mix)"},

  {audioURL:'http://examples.devmastery.pl/assets/audio/runs.mp3',
  coverURL:'http://examples.devmastery.pl/assets/audio/runs.jpg',
  artist: 'Wowa',
  title: "Runs"},

  {audioURL:"http://listen.vo.llnwd.net/g3/prvw/3/9/1/5/7/2269575193.mp3",
  coverURL:'http://examples.devmastery.pl/assets/audio/runs.jpg',
  artist: 'napster',
  title: "napster API song"},
]

const currentSong=songs[1]

  return (
    <div  className='App'>
 <SongPlayer isLooped song={currentSong} /> 
 <section>
<Heading title="Songs"/>
<ul>{songs.map(song=> <SongListItem key={song.audioURL} song={song}/>)}</ul>
 </section>
    </div>
  )
}
