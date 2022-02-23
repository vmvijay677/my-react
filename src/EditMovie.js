import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory, useParams } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";
import { movieValidationSchema } from "./AddMovie";


export function EditMovie({ movieList, setMovieList }) {
    const { id } = useParams();
    //const movie = movieList[id];
    //console.log(movie);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`${API}/movies/${id}`, {
            method: "GET",
        })
            .then((data) => data.json()) //response object
            .then((mv) => setMovie(mv))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div>
            {movie ? <EditMovieForm movie={movie} /> : <h2>Loading...</h2>}
        </div>
    );
}

function EditMovieForm({ movie }) {
    // const [name, setName] = useState(movie.name);
    // const [poster, setPoster] = useState(movie.poster);
    // const [summary, setSummary] = useState(movie.summary);
    // const [rating, setRating] = useState(movie.rating);
    // const [trailer, setTrailer] = useState(movie.trailer);
    const history = useHistory();

    const formik = useFormik({
        initialValues: {
            name: movie.name,
            poster: movie.poster,
            summary: movie.summary,
            rating: movie.rating,
            trailer: movie.trailer
        },
        validationSchema: movieValidationSchema,
        onSubmit: (updatedMovie) => {
            //console.log("Onsubmit", values);
            editMovie(updatedMovie);
        },
    });

    const editMovie = (updatedMovie) => {
        //     const updatedMovie = {
        //         name: name,
        //         poster: poster,
        //         rating: rating,
        //         summary: summary,
        //         trailer: trailer,
        //     };
        console.log("Updated", updatedMovie);
        //     // const copyMovieList = [...movieList];
        //     // copyMovieList[id] = updatedMovie;
        //     // setMovieList(copyMovieList);
        //     // 1. method must be put & pass id
        //     // 2. body - json data
        //     // 3. headers - json data
        //     //After put is complete -> move to /movies
        fetch(`${API}/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedMovie),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(() => history.push("/movies"));
        //history.push("/movies");
    };
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
            <Button id="button" type="submit" variant="contained" color="success">Save</Button>
        </form>
    );
}
