import Sidebar from "../Components/Sidebar";
import { api } from '../Components/Constants';
import SongBox from "../Components/SongsBpx";
import React, { useState, useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import ArrowButtons from "../Components/ArrowButton";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import MovieBox from "../Components/MovieBox";

const Interests = () => {
    const [songs, setSongs] = useState([])
    const [movies, setMovies] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(`${api}/songs`)
          .then((response) => response.json())
          .then((data) => setSongs(data))
          .catch((error) => console.error('Error fetching songs:', error));
      }, []);
      useEffect(() => {
        fetch(`${api}/books`)
          .then((response) => response.json())
          .then((data) => setBooks(data))
          .catch((error) => console.error('Error fetching songs:', error));
      }, []);
      useEffect(() => {
        fetch(`${api}/movies`)
          .then((response) => response.json())
          .then((data) => setMovies(data))
          .catch((error) => console.error('Error fetching songs:', error));
      }, []);

      const [activeIndex, setActiveIndex] = useState(0);
      const changeMovie = (step) => {
        const newIndex = (activeIndex + step + movies.length) % movies.length;
        setActiveIndex(newIndex);
      };

    return(
    <div>
        <div class="container">
            <Sidebar />

            <div class="content">
            <h1>Personal Interests / Recommendations</h1>
                <div className={`project-section`}>
                    <h2>Songs</h2>
                    <Carousel>
                        {songs.map((song, index) => (
                            <div>
                                <iframe style={{borderRadius:"12px"}} src={song.link}
                                    width="50%" height="260" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                                    loading="lazy"></iframe>
                                <p className="legend">Personal Rating: {song.rating} / 10</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
                    <div className={`project-section`}>
                        <h2>Movies</h2>
                        <Carousel className="project-box"  style={{display:"flex", justifyContent:"center"}}>
                            {movies.map((movie, index) => (
                                <div>
                                    <h3>{movie.title}</h3>
                                    <img src={movie.image} alt={`Movie/Show ${movie.title} Image`} width={"40%"} height={"50%"}/>
                                    {/* <p className="legend">Rating: {song.rating} / 10</p> */}
                                    <p>{movie.summary}</p>
                                    <p>Personal Rating: {movie.rating}</p>
                                    <p>Obsession level: {movie.obsession} / 10</p>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                    <div className={`project-section`}>
                        <h2>Books</h2>
                        <Carousel className="project-box"  style={{display:"flex", justifyContent:"center"}}>
                            {books.map((book, index) => (
                                <div>
                                    <h3>{book.title}</h3>
                                    <img src={book.image} alt={`Movie/Show ${book.title} Image`} width={"10%"} height={"5%"}/>
                                    {/* <p className="legend">Rating: {song.rating} / 10</p> */}
                                    <p>Author: {book.author}</p>
                                    <p>{book.summary}</p>
                                    <p>Personal Rating: {book.rating} / 10</p>
                                </div>
                            ))}
                        </Carousel>
                    </div>

            </div>
        </div>

    </div>
    );
}

export default Interests;