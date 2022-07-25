import React from "react";
import Rating from "./Rating";

const SongCard = ({thumb, title, artist, rating,}) => (
    <>
    <div className="song-card">
        <img src={thumb} alt="cover"/>
        <div className="song-title">{title} by {artist}</div>
        <Rating stars = {rating}/>
    </div>
    </>
)
export default SongCard;
