import "./index.css";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

export default function App() {
  const movies = [
    {
      poster: "https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      name: "1. Master (2021)",
      summary: "John Durairaj, an alcoholic professor, gets enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
      rating: "7.8/10"
    },
    {
      poster: "https://www.sify.com/uploads/1-tgykJ4ihfiagi.jpg",
      name: "2. Bigil (2019)",
      summary: "Michael, an aggressive young man, gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
      rating: "6.9/10"
    },
    {
      poster: "https://pbs.twimg.com/media/DLyjImyVwAAw5No.jpg",
      name: "3. Mersal (2017)",
      summary: "Maaran, a doctor, is falsely arrested for the murder of his colleague, Dr Arjun Zachariah. He soon discovers that the real culprit is a lookalike who aims to expose corruption in the medical industry.",
      rating: "7.8/10"
    },
    {
      poster: "https://live.staticflickr.com/65535/10496255225_2744d915de_b.jpg",
      name: "4. Theri (2016)",
      summary: "DCP Vijaya Kumar goes into hiding to bring up his daughter in a safe environment. However, after her life is threatened by deadly gangsters, he must face his past to protect his daughter.",
      rating: "7.4/10"
    },
    {
      poster: "https://pbs.twimg.com/media/BqptqsXCEAEBQjE?format=jpg&name=large",
      name: "5. Kaththi (2014)",
      summary: "Kathiresan, who escapes from prison, accidentally meets his lookalike, Jeeva, who gets shot by criminals. Kathiresan masquerades as Jeeva in order to save himself, but it turns him into a crusader.",
      rating: "8.1/10"
    } 
];
const [name, setName] = useState(" ");
const [poster, setPoster] = useState(" ");
const [summary, setSummary] = useState(" ");
const [rating, setRating] = useState(" ");
const [movieList, setMovieList] = useState(movies);
const style = {
  marginTop: "15px"
}
  return (
    <div>
      <Heading />
      <div className="add-movie">
        <TextField id="outlined-basic" label="Movie Name" color="success" variant="outlined" style={style} onChange={(event) => setName(event.target.value)} />
        <TextField id="outlined-basic" label="Movie Poster" variant="outlined" color="success" onChange={(event) => setPoster(event.target.value)}/>
        <TextField id="outlined-multiline-static" label="Movie Summary" color="success" multilinerows={2} onChange={(event) => setSummary(event.target.value)}/>
        <TextField id="outlined-basic" label="Movie Rating" variant="outlined" color="success" onChange={(event) => setRating(event.target.value)}/>
        <Button id="button" variant="contained" className="button" color="warning" onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
          };
          setMovieList([... movieList, newMovie]);
        }}>Add Movie</Button>
      </div>
      <div className="App"> 
      {movieList.map(({name, poster, summary, rating}, index) => (<Movieslist key={index} name={name} poster={poster} summary={summary} rating={rating}/>))}
      </div>
    </div>
    // <Counter />
  );
}

function Heading(){
  const style = {
    marginTop: "20px"
  }
  return(
    <div>
    <h1 style={style}>Add Your Favourite Movie Here</h1>
    </div>
  )
}

function Movieslist({name, poster, summary, rating}){
  //let like = 4;
  const styles = {
    color: "green",
  };
  const [like1, setLike1] = useState(0);
  const [dislike1, setDislike1] = useState(0);
  const [show, setShow] = useState(true);
  // const summaryStyles = {
  //   display: show ? "block" : "none",
  // }
  return (
    <Card className="finalCard">
      <div className="Movie">
      <img src={poster} alt="movie-poster"></img>
      <CardContent>
      <div className="Movie-specs">
      <h2>{name} 
        <IconButton color="warning" aria-label="movie summary" onClick={() => setShow(!show)}>
          {show ? <ExpandLessIcon/> : <ExpandMoreIcon />}
        </IconButton>
      </h2>
      {show ? <p className="Summary">{summary}</p> : " "}
      <span className="Span1">IMDb Rating:</span>
      <span className="Span2" style={styles}>⭐ {rating}</span><br></br>
      <p>
      <IconButton color="success" aria-label="delete" onClick={() => setLike1(like1 + 1)}>
      <Badge color="success" badgeContent={like1}>👍</Badge>
      </IconButton>&nbsp; &nbsp;
      <IconButton aria-label="delete" color="primary" onClick={() => setDislike1(dislike1 + 1)}>
      <Badge color="primary" badgeContent={dislike1}>👎</Badge>
      </IconButton>
      </p>
      </div>
      </CardContent>
      </div>
    </Card>
  );
}


function Counter(){
  const[color, setColor] = useState("pink");
  const [colorList, setColorList] = useState(["red", "grey", "purple", "orange"]);
  const style = {
    backgroundColor: color,
  };
  return (
    <div>
      <input value={color} style={style} onChange={(event) => setColor(event.target.value)} placeholder="Enter a color"></input>
      <button onClick={() => setColorList([... colorList, color])}>Add Color</button>
      {colorList.map((clr) => <ColorBox color={clr}/>)};
    </div>
  )
}

function ColorBox({color}){
  const box = {
    backgroundColor: color,
    width: "50px",
    height: "50px",
    marginTop: "10px"
  }
  return(
    <div style={box}>{color}</div>
  )
}
