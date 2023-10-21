import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState({});
  let { id } = useParams();

  useEffect(() => {
    let myMovie = {
      id: 3,
      title: "Old Dads",
      release_date: "2023-10-23",
      runtime: 110,
      mpaa_rating: "R",
      description: "Some long description",
    };
    setMovie(myMovie);
  }, [id]);

  return (
    <div>
      <h2>Movie: {movie.title}</h2>
      <small>
        <em>
          {movie.release_date}, {movie.runtime} minutes, Rated{" "}
          {movie.mpaa_rating}
        </em>
      </small>
      <hr></hr>
      <p>{movie.description}</p>
    </div>
  );
};

export default Movie;
