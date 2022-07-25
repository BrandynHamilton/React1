import React from "react";

const Rating = (stars) => {

  return(
     [...Array(Math.round(stars <= 5 ? stars : 0)).keys()].map(star => 
         <div className="star">{star}</div>
     )
  ) 
      
       
 
};

export default Rating;
