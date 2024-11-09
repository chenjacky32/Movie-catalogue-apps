import NowPlaying from '../../scripts/views/pages/now-playing';
import Upcoming from '../../scripts/views/pages/upcoming';
import Detail from '../../scripts/views/pages/details';
import Like from '../views/pages/like';

const routes = {
  '/': NowPlaying,
  '/now-playing': NowPlaying,
  '/upcoming': Upcoming,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
