import { itActsAsFavoriteMovieModel } from './contracts/favoriteMovieContract';
import FavouriteMovieIdb from '../src/scripts/data/favorite-movie-idb';

describe('Favorite Movie Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteMovieIdb.getAllMovies()).forEach(async (movie) => {
      await FavouriteMovieIdb.deleteMovie(movie.id);
    });
  });

  itActsAsFavoriteMovieModel(FavouriteMovieIdb);
});
