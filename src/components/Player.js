/*player is the primary component through which we make our music player function*/

import React from "react";
//note the import of the other two components
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import { useEffect, useRef, useState } from "react";

export default function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  //implementing the play and pause functionality
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  //creating a function that skips/forwards the song
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.song.length - 1) {
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;
        if (temp > 0) {
          temp = props.song.length - 1;
        }

        return temp;
      });
    }
  };

  let audioTune = props.songs.map((songs) => {
    return new Audio(songs.src, "./songs");
  });

  console.log(audioTune);
  return (
    <>
      <p>
        <div className="text-animation">
          <strong>Upcoming song</strong>
        </div>
        <div className="nextsong-details">
          <img
            src={props.songs[props.nextSongIndex].img_src}
            alt={props.songs[props.nextSongIndex].title}
            style={{ width: "4em", height: "auto" }}
          />

          <p>
            <b>{props.songs[props.nextSongIndex].title}</b> &nbsp; by &nbsp;
            <b>{props.songs[props.nextSongIndex].artist}</b>
            {/* &nbsp from album &nbsp */}
            {/* <b>{props.songs[props.nextSongIndex].album}</b> */}
          </p>
        </div>
      </p>

      {/*this div contains the PlayerControls and PlayerDetails components  */}

      <div className="music-player">
        {/*embedding the audio element*/}
        <audio
          src={props.songs[props.currentSongIndex]}
          ref={audioElement}
        ></audio>
        {/*listing out all the song details*/}
        <PlayerDetails song={props.songs[props.currentSongIndex]} />
        <PlayerControls
          /*passing the functions as props to the children components*/
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />

        <div className="player__footer">
          <ul className="list list--footer">
            <li>
              <a href="/" className="list__link">
                <i className="fa fa-heart-o"></i>
              </a>
            </li>

            <li>
              <a href="/" className="list__link">
                <i className="fa fa-random"></i>
              </a>
            </li>

            <li>
              <a href="/" className="list__link">
                <i className="fa fa-undo"></i>
              </a>
            </li>

            <li>
              <a href="/" className="list__link">
                <i className="fa fa-ellipsis-h"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
