import React from "react";

const MovieCard = ({ movie: {imdbID, Year, Poster, Title, Type} }) => {
    return (
        <div className="movie" key={imdbID}>
            <div>
                <p>{Year}</p>
            </div>
            <div>
                <img src={Poster !== " N /A" ? Poster : "https://viaplaceholder.com/400"} alt={Title} />
            </div>
            <div>
                <p>{Type}</p>
            </div>
            <div>
                <h3>{Title}</h3>
            </div>
        </div>

    );
}


export default MovieCard;