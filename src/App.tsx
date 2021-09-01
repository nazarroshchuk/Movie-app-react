import React, { useEffect, useState } from 'react';
import './App.css';
import { getMoviesList } from "./servise/service";
import { MovieList } from "./Components/MoviesList";
import { ErrorData, Genres, Movie } from "./types/types";
import { GenresFilter } from "./Components/GenresFilter";
import { PaginationMenu } from "./Components/PaginationMenu";
import { Loader } from "./Components/Loader";
import { ErrorPage } from "./Components/ErrorPage";
import { NotFoundPage } from "./Components/NotFoundPage";
import { getGenres } from "./utils/utils";

function App() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [existData, setExistData] = useState(true);
    const [selectedValues, setSelectedValues] = useState<Genres[]>([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<ErrorData>({status: '', message: ''});
    const [totalPages, setTotalPages] = useState(1);

    const updatedMovies = movies.map(el => ({ ...el, genres: getGenres(el.genre_ids).flat() }));
    const genresQuery = selectedValues.map(el => el.id).join(',');

    useEffect(() => {
        setIsLoading(true);
        getMoviesList(page,'&with_genres=', genresQuery)
            .then(response => {
                setMovies(response.results.sort((a: Movie, b: Movie) => b.release_date.localeCompare(a.release_date)));
                setExistData(!!response.results.length);
                setTotalPages(response.total_pages);
            })
            .catch((err:ErrorData) => setError(err))
            .finally(() => {
                setIsLoading(false);
            });
    }, [page, genresQuery]);

    const selectedGenresHandler = (selectedData:Genres[] ) => {
        setSelectedValues(selectedData);
    }

    const paginationHandler = (event: React.ChangeEvent<unknown>, value: number): void => {
        setPage(value);
    }


  return (
    <div className="App">
        <GenresFilter isLoading={isLoading} onHandler={selectedGenresHandler} />
        {
            <Loader isLoading={isLoading}>
                {!error.message && existData && <MovieList movies={updatedMovies}/>}
                {!existData && <NotFoundPage defaultMessage={'Data not found'}/>}
                {error.message && <ErrorPage error={error} />}
            </Loader>
        }
        <PaginationMenu totalPages={totalPages} onChange={paginationHandler} disabled={isLoading}/>
    </div>
  );
}

export default App;
