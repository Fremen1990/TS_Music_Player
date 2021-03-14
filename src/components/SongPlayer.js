import React, { useRef, useState } from "react";
import { Heading } from "./Heading";
import "./SongPlayer.css";

export function SongPlayer({ showControls = false, song, isLooped = true, handleChangeToPreviousSong, handleChangeToNextSong }) {

  const audioRef = useRef();
  const { audioUrl, coverUrl, artist, title } = song;

  const[isPlaying, setIsPlaying]= useState(false);
  const[pauseButtonInActive, setPauseButtonInactive]= useState("pauseButtonInActive")
  const[playButtonInActive, setPlayButtonInActive]= useState("")

function handlePlay(){
if(!isPlaying){
  audioRef.current.play()
  setIsPlaying(true);
  setPlayButtonInActive("playButtonInactive")
  setPauseButtonInactive("")

}  }

function handlePause(){
  if(isPlaying){
    audioRef.current.pause();
    setIsPlaying(false);
    setPauseButtonInactive("pauseButtonInActive")
    setPlayButtonInActive("")
  }
}

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
        <button onClick={handleChangeToPreviousSong}> Prev </button>
        <button className={playButtonInActive} onClick={handlePlay}>Play</button>
        <button className={pauseButtonInActive} onClick={handlePause}>Pause</button>
        <button onClick={handleChangeToNextSong}> Next </button>
      </div>
    </section>
  );
}
