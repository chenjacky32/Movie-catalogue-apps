import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavouriteMovieIdb from '../../src/scripts/data/favorite-movie-idb';

const createLikeButtonPresenterWithMovie = async (movie) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteMovies: FavouriteMovieIdb,
    movie,
  });
};

export { createLikeButtonPresenterWithMovie };
