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
import { useEffect } from "react";
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
      <Paper style={{ borderRadius: "0px", minHeight: "150vh" }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>Home</Button>
              <Button color="inherit" onClick={() => history.push("/movies")}>Movies</Button>
              <Button color="inherit" onClick={() => history.push("/movies/add")}>Add Movie</Button>
              <Button color="inherit" onClick={() => history.push("/color-game")}>Color Game</Button>
              <Button color="inherit" onClick={() => history.push("/tic-tac-toe")}>Tic Tac Toe</Button>
              <Button color="inherit" onClick={() => history.push("/basic-form")}>Form Validations</Button>
              <Button color="inherit" onClick={() => history.push("/recipe-app")}>Recipe App</Button>
              <Button color="inherit" onClick={() => history.push("/recipe-list")}>Recipe List</Button>
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
              <Route path="/recipe-app">
                <Welcome />
              </Route>
              <Route path="/recipe-list">
                <RecipeList />
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

function Welcome() {
  const message = "Welcome to recipe app 😊🎂";
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

function RecipeList() {
  // const recipeList = [
  //   {
  //     picture:
  //       "https://img-global.cpcdn.com/recipes/b114fd2f1b65e6a1/1200x630cq70/photo.jpg",
  //     name: "Tandoori Chicken"
  //   },
  //   {
  //     picture:
  //       "https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-1.jpg",
  //     name: "Panner Butter Masala"
  //   },
  //   {
  //     picture:
  //       "https://images.indulgexpress.com/uploads/user/imagelibrary/2019/8/1/original/Biryanifest.jpg",
  //     name: "Briyani"
  //   },
  //   {
  //     picture:
  //       "https://static.toiimg.com/thumb/64696930.cms?width=1200&height=900",
  //     name: "Parotta Shawarma"
  //   }
  // ];
  const [recipeList, setRecipeList] = useState([]);

  //runs only once when component is mounted
  useEffect(() => {
    fetch("https://6209ee0f92946600171c55ca.mockapi.io/recipes")
      .then((data) => data.json())
      .then((recipes) => setRecipeList(recipes));
  }, []);

  const message = "Awesome recipe list 🍗🍟"
  return (
    <div>
      <h2>{message}</h2>
      <div className="recipe-list-container">
        {recipeList.map((recipe) => <Recipe recipe={recipe} />)}
      </div>
    </div>
  );
}

function Recipe({ recipe }) {
  return (
    <div className="recipe-container">
      <img src={recipe.picture} alt="recipe-picture" className="recipe-picture"></img>
      <p className="recipe-name">{recipe.name}</p>
    </div>
  );
}
