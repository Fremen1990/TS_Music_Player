import React, { useState } from "react";
import "./SongListItem.css";




export function SongListItem({ song, isCurrent, onSelect }) {

const [favourtieSong, setFavouriteSong] = useState(0);
const [favourtieSongHeart, setFavouriteSongHeart] = useState("🤍");

  function handleClick() {
    onSelect(song);

  }

  function handleClickFavouriteSong(){

if(favourtieSongHeart==="🤍"){
  setFavouriteSong(song);
  setFavouriteSongHeart("❤️")



}
if(favourtieSongHeart==="❤️"){
  setFavouriteSong(song);
  setFavouriteSongHeart("🤍")
}


console.log("favourite", favourtieSong)


  }

  return (
    <li
      className={`SongListItem ${isCurrent ? "selected" : ""}`}
      onClick={handleClick}
    >
      {song.title} by {song.artist} {isCurrent &&  <span>🎵</span>  }
      
       <span className="favouriteBlank" onClick={handleClickFavouriteSong}>{favourtieSongHeart}</span>
    </li>
  );
}
