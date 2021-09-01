import React from "react";
import {Movie} from "../types/types";
import {MovieCard} from "./MovieCard";
import classes from './MoviesList.module.css'

interface PropsType {
    movies: Movie[]
}

export const MovieList = ({ movies }: PropsType) => {
    return (
        <div className={classes.containerList}>
            {movies.map(movie =>
            <MovieCard
                key={movie.id}
                movie={movie}
            />
            )}
        </div>
    )
}
