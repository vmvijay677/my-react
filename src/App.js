import "./index.css";
import { useState } from "react";
import { Msg, double } from './Msg';
import { AddColor, ColorBox } from './AddColor';
import { BasicForm } from "./BasicForm";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { NotFound } from "./NotFound";
import { TicTacToe } from "./TicTacToe";
import { MovieList } from "./MovieList";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import { MovieDetails } from "./MovieDetails";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

//console.log(double(8));
export default function App() {
  const history = useHistory();
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
              <Button color="inherit" onClick={() => history.push("/movies")}>Movies</Button>
              <Button color="inherit" onClick={() => history.push("/movies/add")}>Add Movie</Button>
              <Button color="inherit" onClick={() => history.push("/color-game")}>Color Game</Button>
              <Button color="inherit" onClick={() => history.push("/tic-tac-toe")}>Tic Tac Toe</Button>
              <Button color="inherit" onClick={() => history.push("/basic-form")}>Form Validations</Button>
              <Button
                color="inherit"
                startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                style={{ marginLeft: "auto" }}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}>{mode === "light" ? "Dark" : "Light"} Mode</Button>
            </Toolbar>
          </AppBar>

          <div className="route-container">
            <Switch>
              <Route exact path="/">
                <Msg />
              </Route>
              <Route path="/films">
                <Redirect to="/movies" />
              </Route>
              <Route path="/movies/add">
                <AddMovie />
              </Route>
              <Route path="/movies/edit/:id">
                <EditMovie
                //movieList={movieList} setMovieList={setMovieList} 
                />
              </Route>
              {/* : makes id a variable */}
              <Route path="/movies/:id">
                <MovieDetails />
              </Route>
              <Route path="/movies">
                <MovieList />
              </Route>
              <Route path="/color-game">
                <AddColor />
              </Route>
              <Route path="/tic-tac-toe">
                <TicTacToe />
              </Route>
              <Route path="/basic-form">
                <BasicForm />
              </Route>

              <Route path="**">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}