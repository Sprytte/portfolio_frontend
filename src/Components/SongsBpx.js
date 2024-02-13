import ArrowButtons from './ArrowButton';
import React, { useState, useEffect } from 'react';

const SongBox = ({ song }) => {
    const [currentProject, setCurrentProject] = useState(0);
    const changeSong = (n, total) => {
        setCurrentProject((currentProject + n >= 0 && currentProject + n < total) ? currentProject + n : currentProject);
    };

  return (
    <div>
        <div className="project-box">
          <h3>{song.title}</h3>
          <div className="image-carousel">  
            
            <iframe style={{borderRadius:"12px"}} src={song.link}
            width="50%" height="260" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"></iframe>
            {/* <img src={project.images[currentProject]} alt={`Project ${song.title} Image ${currentProject + 1}`} width={220} height={150}/> */}
            
          </div>
          <p>{song.artist}</p>
          <p>{song.rating} / 10</p>
          </div>
    </div>
  );
};

export default SongBox;
