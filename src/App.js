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
import { Counter,  double } from "./Counter";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function App() {
  const movies = [
    {
      poster: "https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      name: "1. Master (2021)",
      summary: "John Durairaj, an alcoholic professor, gets enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
      rating: "7.8/10",
      trailer: "https://www.youtube.com/embed/UTiXQcrLlv4"
    },
    {
      poster: "https://www.sify.com/uploads/1-tgykJ4ihfiagi.jpg",
      name: "2. Bigil (2019)",
      summary: "Michael, an aggressive young man, gives up his dream of becoming a footballer after his father's murder. However, a friend convinces him to coach a women's football team and turn his life around.",
      rating: "6.9/10",
      trailer: "https://www.youtube.com/embed/GR-Ui8-V2M0"
    },
    {
      poster: "https://pbs.twimg.com/media/DLyjImyVwAAw5No.jpg",
      name: "3. Mersal (2017)",
      summary: "Maaran, a doctor, is falsely arrested for the murder of his colleague, Dr Arjun Zachariah. He soon discovers that the real culprit is a lookalike who aims to expose corruption in the medical industry.",
      rating: "7.8/10",
      trailer: "https://www.youtube.com/embed/gQDo5QuZTaw"
    },
    {
      poster: "https://live.staticflickr.com/65535/10496255225_2744d915de_b.jpg",
      name: "4. Theri (2016)",
      summary: "DCP Vijaya Kumar goes into hiding to bring up his daughter in a safe environment. However, after her life is threatened by deadly gangsters, he must face his past to protect his daughter.",
      rating: "7.4/10",
      trailer: "https://www.youtube.com/embed/ZK4uGLpkAKk"
    },
    {
      poster: "https://pbs.twimg.com/media/BqptqsXCEAEBQjE?format=jpg&name=large",
      name: "5. Kaththi (2014)",
      summary: "Kathiresan, who escapes from prison, accidentally meets his lookalike, Jeeva, who gets shot by criminals. Kathiresan masquerades as Jeeva in order to save himself, but it turns him into a crusader.",
      rating: "8.1/10",
      trailer: "https://www.youtube.com/embed/bMf0IyzyKt4"
    } 
];

const [movieList, setMovieList] = useState(movies);
  return (
    <div>
      <br></br>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/movies/add">Add Movie</Link>
        </li>
        <li>
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/">
          <h1>Welcome 😊😊!!!</h1>
        </Route>

        <Route exact path="/films">
          <Redirect to="/movies" />
        </Route>

        <Route exact path="/movies/add">
          <AddMovie movieList={movieList} setMovieList={setMovieList} />
        </Route>

        <Route path="/movies/:id">
          <MovieDetails movieList={movieList} setMovieList={setMovieList} />
        </Route>

        <Route path="/movies">
        <Heading />
      <div className="App"> 
      {movieList.map(({name, poster, summary, rating}, index) => (<Movieslist 
        key={index} name={name} 
        poster={poster} 
        summary={summary} 
        rating={rating} 
        deleteButton={<IconButton aria-label="delete" size="large" color="error" onClick={() => {
          //console.log(index); 
          const copyMovieList = [... movieList];
          copyMovieList.splice(index, 1);
          setMovieList(copyMovieList);
        }}>
          <DeleteIcon fontSize="inherit"/>
        </IconButton>}
        id={index} />))}
      </div>
        </Route>
       
        <Route path="/tic-tac-toe">
          <TicTacToe />
        </Route>

        <Route path="**">
          <NotFound />
        </Route>

      </Switch>
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
    <h1 style={style}>Your Favourite Movies</h1>
    </div>
  )
}

function Movieslist({name, poster, summary, rating, deleteButton, id}){
  //let like = 4;
  const styles = {
    color: "green",
  };
  const [like1, setLike1] = useState(0);
  const [dislike1, setDislike1] = useState(0);
  const [show, setShow] = useState(true);
  const history = useHistory();
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
        <IconButton color="primary" aria-label="movie details" onClick={() => history.push(`/movies/${id}`)}>
          <InfoIcon />
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
      {deleteButton}
      </p>
      </div>
      </CardContent>
      </div>
    </Card>
  );
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

function TicTacToe(){
  const [board, setBoard] = useState([
    null, 
    null, 
    null, 
    null, 
    null, 
    null, 
    null, 
    null, 
    null]);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(var i in lines){
      const [a, b, c] = lines[i];
      if(board[a] !== null && board[a] === board[b] && board[b] === board[c]){
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);
  
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if(winner === null && board[index] === null){
      const boardCopy = [... board];
      console.log(boardCopy, index);
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  }

  const { width, height } = useWindowSize()
  return (
    <div className="full-game">
    {winner ? <Confetti width={width} height={height} /> : " "}
    <h2>Start the game with X</h2>
      <div className="board">
      {board.map((val, index) => (<GameBox val={val} onPlayerClick={() => handleClick(index)}/>))}
      </div>
      {winner ? <h1>Winner is: {winner}</h1> : " "}
      <Button id="button" variant="contained" className="button" color="warning" onClick = {() => {setBoard(
        [ null, 
          null, 
          null, 
          null, 
          null, 
          null, 
          null, 
          null, 
          null]); setIsXTurn(true);}}>Restart</Button>
      {/* <GameBox /> */}
      </div>
  )
}

function NotFound(){
  const styles = {
    width: "100%",
  };
  return (
    <div>
      <h1 className="not-found">404 Not Found</h1>
      <img style={styles} alt="404-not-found" src="https://i.pinimg.com/originals/99/40/a5/9940a5a30d960f42361482ff22ecf17f.gif"></img>
    </div>
  );
}

function GameBox({val, onPlayerClick}){
  // const [val, setVal] = useState(null);
  // const val = "X";
  const styles = {
    color: val === "X" ? "green" : "red"
  }
  return(
    <div style={styles} 
    onClick = {() => onPlayerClick()} 
    className="game-box">{val}</div>
  )
}

function MovieDetails({movieList}){
  const { id } = useParams();
  console.log(id, movieList);
  const movie = movieList[id];
  const history = useHistory();
  
  const styles = {
    color: "green",
  };

  const style1 = {
    marginTop: "20px",
  }
  return(
    <div>
      <iframe width="100%" height="650" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="movie-details">
        <h2>{movie.name}</h2>
        <p className="Summary">{movie.summary}</p>
        <span className="Span1">IMDb Rating: </span>
        <span className="Span2" style={styles}>⭐ {movie.rating}</span><br></br>
        <Button style={style1} variant="contained" startIcon={<ArrowBackIosIcon />} onClick={() => {history.goBack()}}>
        Back
      </Button>
      </div>
    </div>
  );
}

function AddMovie({movieList, setMovieList}){
  const [name, setName] = useState(" ");
  const [poster, setPoster] = useState(" ");
  const [summary, setSummary] = useState(" ");
  const [rating, setRating] = useState(" ");
  const [trailer, setTrailer] = useState(" ");
  const history = useHistory();

  const style = {
    marginTop: "15px"
  }
  return(
    <div className="add-movie">
        <TextField id="outlined-basic" label="Movie Name" color="success" variant="outlined" style={style} onChange={(event) => setName(event.target.value)} />
        <TextField id="outlined-basic" label="Movie Poster" variant="outlined" color="success" onChange={(event) => setPoster(event.target.value)}/>
        <TextField id="outlined-multiline-static" label="Movie Summary" color="success" multilinerows={2} onChange={(event) => setSummary(event.target.value)}/>
        <TextField id="outlined-basic" label="Movie Rating" variant="outlined" color="success" onChange={(event) => setRating(event.target.value)}/>
        <TextField id="outlined-basic" label="Movie Trailer" variant="outlined" color="success" onChange={(event) => setTrailer(event.target.value)}/>
        <Button id="button" variant="contained" className="button" color="warning" onClick={() => {
          const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          setMovieList([... movieList, newMovie]);
          history.push("/movies");
        }}>Add Movie</Button>
      </div>
  );
}







//Tasks: 
//draw condition, x r o turn, whom to start with, restart-board empty.