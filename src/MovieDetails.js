import Button from '@mui/material/Button';
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from "react";
import { API } from "./global";

export function MovieDetails() {
  //extracting parameter form the url
  const { id } = useParams();
  //console.log(id, movieList);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`${API}/movies/${id}`, {
      method: "GET",
    })
      .then((data) => data.json()) //response object
      .then((mv) => setMovie(mv));
  }, []);
  
  const history = useHistory();
  const styles = {
    color: movie.rating > 7.5 ? "green" : "red", //conditional styling
  };
  return (
    <div>
      <iframe width="100%" height="650" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p style={styles} className="movie-rating">⭐ {movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
        <Button variant="contained" startIcon={<ArrowBackIosIcon />} onClick={() => { history.goBack(); }}>
          Back
        </Button>
      </div>
    </div>
  );
}
