import React from "react";

export default function Meme(props) {
  return (
    <div className="meme">
      <h2 className="top">{props.data.topText}</h2>
      <img src={props.data.imgSrc} alt="meme" />
      <h2 className="bottom">{props.data.bottomText}</h2>
    </div>
  );
}
