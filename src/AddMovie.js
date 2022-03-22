import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

export const movieValidationSchema = yup.object({
  name: yup
    .string()
    .required("Why not fill this name?")
    .min(5, "Need a longer name"),
  poster: yup
    .string()
    .required("Why not fill this poster?")
    .min(4, "Need a longer poster"),
  summary: yup
    .string()
    .required("Why not fill this summary?")
    .min(20, "Need a longer summary"),
  rating: yup
    .number()
    .required("Why not fill this rating?")
    .min(0).max(10),
  trailer: yup
    .string()
    .required("Why not fill this trailer?")
    .min(4, "Need a longer summary"),
});

export function AddMovie() {
  // const [name, setName] = useState(" ");
  // const [poster, setPoster] = useState(" ");
  // const [summary, setSummary] = useState(" ");
  // const [rating, setRating] = useState(" ");
  // const [trailer, setTrailer] = useState(" ");
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      summary: "",
      rating: "",
      trailer: ""
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      //console.log("Onsubmit", values);
      addMovie(newMovie);
    },
  });

  const addMovie = (newMovie) => {
    console.log("Onsubmit", newMovie);
    fetch(`${API}/movies/`, {
      method: "POST",
      body: JSON.stringify([newMovie]),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(() => history.push("/movies"));
  };
  
  // const addMovie = () => {
  //   const newMovie = {
  //     name: name,
  //     poster: poster,
  //     rating: rating,
  //     summary: summary,
  //     trailer: trailer,
  //   };
  //   // 1. method must be post
  //   // 2. body - json data
  //   // 3. headers - json data
  //   //After post is complete -> move to movies
  //   fetch(`${API}/movies/`, {
  //     method: "POST",
  //     body: JSON.stringify(newMovie),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then(() => history.push("/movies"));
  //   //setMovieList([...movieList, newMovie]);
  // }

  return (
    <form onSubmit={formik.handleSubmit} className="add-movie-form">
      <TextField
        id="outlined-basic"
        className="inputfield"
        label="Movie Name"
        color="primary"
        variant="outlined"
        id="name"
        name="name"
        error={formik.touched.name && formik.errors.name}
        helperText={formik.touched.name && formik.errors.name ? formik.errors.name : " "}
        onChange={
          //(event) => setName(event.target.value)
          formik.handleChange
        }
        value={formik.values.name}
        onBlur={formik.handleBlur} />
      <TextField
        id="outlined-basic"
        className="inputfield"
        label="Movie Poster"
        variant="outlined"
        color="primary"
        id="poster"
        name="poster"
        error={formik.touched.poster && formik.errors.poster}
        helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : " "}
        onChange={
          // (event) => setPoster(event.target.value)
          formik.handleChange
        }
        value={formik.values.poster}
        onBlur={formik.handleBlur} />
      <TextField
        id="outlined-basic"
        className="inputfield"
        label="Movie Rating"
        color="primary"
        variant="outlined"
        id="rating"
        name="rating"
        error={formik.touched.rating && formik.errors.rating}
        helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : " "}
        onChange={
          //(event) => setRating(event.target.value)
          formik.handleChange
        }
        value={formik.values.rating}
        onBlur={formik.handleBlur} />
      <TextField
        id="outlined-basic"
        className="inputfield"
        label="Movie Summary"
        variant="outlined"
        color="primary"
        id="summary"
        name="summary"
        error={formik.touched.summary && formik.errors.summary}
        helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : " "}
        onChange={
          //(event) => setSummary(event.target.value)
          formik.handleChange
        }
        value={formik.values.summary}
        onBlur={formik.handleBlur} />
      <TextField
        id="outlined-basic"
        className="inputfield"
        label="Movie Trailer"
        variant="outlined"
        color="primary"
        id="trailer"
        name="trailer"
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : " "}
        onChange={
          //(event) => setTrailer(event.target.value)
          formik.handleChange
        }
        value={formik.values.trailer}
        onBlur={formik.handleBlur} />
      <Button id="button" type="submit" variant="contained" color="warning">Add Movie</Button>
    </form>
  );
}