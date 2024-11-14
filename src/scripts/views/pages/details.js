import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieDetailTemplate, createLikeMovieButtonTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavouriteMovieIdb from '../../data/favorite-movie-idb';

const Detail = {
  async render() {
    return `
       <div id="movie" class="movie"></div>
       <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector('#movie');

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteMovies: FavouriteMovieIdb,
      movie: {
        id: movie.id,
        title: movie.title,
        overview: movie.overview,
        backdrop_path: movie.backdrop_path,
        vote_average: movie.vote_average,
      },
    });

    movieContainer.innerHTML = createMovieDetailTemplate(movie);
    likeButtonContainer.innerHTML = createLikeMovieButtonTemplate();
  },
};

export default Detail;
