/*player details*/

import React from "react";
/* reiving props from the app.js*/
export default function PlayerDetails(props) {
  return (
    <div className="music-player--details">
      <div className="details-img--image">
        {/*displaying the song details on the player screen using props to access the state*/}
        <img src={props.song.img_src} alt={props.song.title} />
      </div>
      <div className="range"></div>
      <div className="artist-info">
        {/*using props to show the title and artist*/}
        <h3 className="details-title">{props.song.title}</h3>
        <h4 className="details-artist">{props.song.artist}</h4>
        <div className="line"></div>
      </div>
    </div>
  );
}
