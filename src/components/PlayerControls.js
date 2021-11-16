/*this component will display the player controls*/

import React from "react";
//importing font awesome for the buttons of the player controls
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
//receiving props from the player component
export default function PlayerControls(props) {
  return (
    /*creating the skip backward button and using the props from the player to check if the song should be skipped  */
    <div className="music-player-controls">
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      {/*creating the play button and using the useState hook from the player(passed as props) to check if the song is playing  */}
      <button
        className="play-btn"
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      {/*creating the skip forward button and using the props(calling the function SkipSong) from the player to check if the song should be skipped  */}
      <button className="skip-btn" onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}
