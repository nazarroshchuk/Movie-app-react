import { GENRES } from "../constants/genres";

export function getGenres(genres: number[]) {
    return genres.map((el: number) => GENRES.filter((gen: { id: number, name: string}) => gen.id === el ))
}
