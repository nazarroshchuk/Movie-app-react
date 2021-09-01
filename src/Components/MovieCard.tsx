import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Movie } from "../types/types";
import notFoundImage from '../assets/Poster_Not_Available2.jpg';
import './MovieCard.css';

const useStyles = makeStyles({
    root: {
        width: 350,
        marginBottom: "20px",
    },
    genresList: {
        listStyle: "none",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: 'start'
    },
    genre: {
        padding: "0 3px",
        margin: "2px",
        border: "1px solid #053352",
        borderRadius: '4px',
        lineHeight: "28px",
        backgroundColor: "rgba(196,196,255,0.53)",
    },
    actionArea: {
        height: "auto",
    },
    year: {
        color: "#aa2e25",
        fontSize: "16px",
        paddingTop: "5px",
    }
});

interface PropsType {
    movie: Movie;
}

export const MovieCard = ({ movie }: PropsType) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.actionArea}>
                <CardMedia
                    component="img"
                    alt={movie.title}
                    height="400"
                    image={movie.poster_path ? 'https://image.tmdb.org/t/p/w500/' + movie.poster_path : notFoundImage}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {movie.title}
                    </Typography>
                    <Typography variant="h5" component="h4" className={classes.year}>
                        {movie.release_date ? (movie.release_date).split('-')[0] : '-'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="div">
                        <ul className={classes.genresList}>
                            {!!movie.genres?.length ? movie.genres.map(ganre => <li className={classes.genre} key={ganre.id}>{ganre.name}</li>) : <p>No genres descriptions</p>}
                        </ul>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


