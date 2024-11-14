import LikeButtonIntiator from '../src/scripts/utils/like-button-initiator';
import FavouriteMovieIdb from '../src/scripts/data/favorite-movie-idb';

describe('Liking A Movie', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the movie has not been liked before', async () => {
    await LikeButtonIntiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy();
  });

  it('should not show the unlike button when the movie has not been liked before', async () => {
    await LikeButtonIntiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });

  it('should be able to like the movie', async () => {
    await LikeButtonIntiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const movie = await FavouriteMovieIdb.getMovie(1);
    expect(movie).toEqual({ id: 1 });

    await FavouriteMovieIdb.deleteMovie(1);
  });

  it('should not add a movie again when its already liked', async () => {
    await LikeButtonIntiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });

    //tambahkan film dengan ID 1 ke daftar film favorite
    await FavouriteMovieIdb.putMovie({ id: 1 });

    //simulasi pengguna menekan tombol like film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada film yang ganda
    expect(await FavouriteMovieIdb.getAllMovies()).toEqual([{ id: 1 }]);
    await FavouriteMovieIdb.deleteMovie(1);
  });

  it('should not add a movie when it has no id', async () => {
    await LikeButtonIntiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {},
    });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavouriteMovieIdb.getAllMovies()).toEqual([]);
  });
});
