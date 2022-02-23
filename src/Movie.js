import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Counter } from "./Counter.1";
import { useHistory } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';

export function Movie({ name, poster, rating, summary, deleteButton, editButton, id }) {
  const styles = {
    color: rating >= 7.5 ? "green" : "red", //conditional styling
  };
  const [show, setShow] = useState(true);
  const history = useHistory();
  //const summaryStyles = {
  //display: show ? "block" : "none",
  //};
  return (
    <Card className="movie-container">
      <img src={poster} alt="movie-poster" className="movie-poster"></img>
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">
            {name}
            <IconButton color="warning" aria-label="movie-summary" onClick={() => setShow(!show)}>
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
            <IconButton color="primary" aria-label="movie-details" onClick={() => history.push(`/movies/${id}`)}>
              <InfoIcon />
            </IconButton>
          </h3>
          <p style={styles} className="movie-rating">⭐ {rating}</p>
        </div>
        {/* <p style={summaryStyles} className="movie-summary">{summary}</p> */}
        {/* conditional rendering - preferred */}
        {show ? <p className="movie-summary">{summary}</p> : " "}
      </CardContent>
      <CardActions>
        <Counter />
        {deleteButton}{editButton}
      </CardActions>
    </Card>
  );
}
