import ArrowButtons from './ArrowButton';
import React, { useState, useEffect } from 'react';

const MovieBox = ({ movie, className }) => {
    const [currentProject, setCurrentProject] = useState(0);
    const changeSong = (n, total) => {
        setCurrentProject((currentProject + n >= 0 && currentProject + n < total) ? currentProject + n : currentProject);
    };

  return (
    <div>
        <div className={`project-box ${className}`}>
          <h3>{movie.title}</h3>
           
            
          <img src={movie.image} alt={`Project ${movie.title} Image ${currentProject + 1}`} width={220} height={150}/>
            {/* <img src={project.images[currentProject]} alt={`Project ${song.title} Image ${currentProject + 1}`} width={220} height={150}/> */}
            
          {/* <p>{song.artist}</p>
          <p>{song.rating} / 10</p> */}
          </div>
    </div>
  );
};

export default MovieBox;
