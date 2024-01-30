import { marshall } from "@aws-sdk/util-dynamodb";
import { Movie } from "./types";

export const generateMovieItem = (movie: Movie) => {
    const item = {
        movieId: movie.id,
        ...movie,
        id: undefined
    };
    delete item.id;

    return {
        PutRequest: {
            Item: marshall(item),
        },
    };
};

export const generateBatch = (data: Movie[]) => {
    return data.map((e) => {
        return generateMovieItem(e);
    });
};