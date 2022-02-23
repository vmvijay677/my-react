import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
import { API } from "./global";

//const API = "https://6209ee0f92946600171c55ca.mockapi.io";

export function MovieList() {
  const history = useHistory();
  const [movieList, setMovieList] = useState([]);

  const getMovies = () => {
    fetch(`${API}/movies`, {
      method: "GET",
    }) // promise
      .then((data) => data.json()) // Response object
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => getMovies(), []);
  // Delete movie -> Refresh data
  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    })
      .then(() => getMovies());
  };

  return (
    <div className="movie-List">
      {movieList.map(({ name, poster, rating, summary, id }, index) => <Movie
        key={index}
        name={name}
        poster={poster}
        rating={rating}
        summary={summary}
        deleteButton={<IconButton aria-label="delete" style={{ marginLeft: "auto" }} size="large" color="error"
          onClick={() => deleteMovie(id)}
        //console.log(index);
        // const copyMovieList = [...movieList];
        // copyMovieList.splice(index, 1);
        // setMovieList(copyMovieList); 
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>}
        editButton={<IconButton aria-label="delete" size="large" color="primary" onClick={() => {
          //console.log(index); 
          history.push(`/movies/edit/${id}`);
        }}>
          <EditIcon fontSize="inherit" />
        </IconButton>}
        id={id}
      />)}
    </div>
  );
}
