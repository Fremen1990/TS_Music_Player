import React, { useRef } from "react";
import { Heading } from "./Heading";
import "./SongPlayer.css";

export function SongPlayer({ showControls = false, song, isLooped = true }) {
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
