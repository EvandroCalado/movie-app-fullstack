import {
  SlideshowOutlined,
  HomeMaxOutlined,
  FavoriteBorderOutlined,
  LiveTvOutlined,
  SearchOutlined,
  RateReviewOutlined,
  LockResetOutlined,
} from '@mui/icons-material';

const main = [
  {
    display: 'home',
    path: '/',
    icon: <HomeMaxOutlined />,
    state: 'home',
  },
  {
    display: 'movies',
    path: '/movie',
    icon: <SlideshowOutlined />,
    state: 'movie',
  },
  {
    display: 'tv series',
    path: '/tv',
    icon: <LiveTvOutlined />,
    state: 'tv',
  },
  {
    display: 'search',
    path: '/search',
    icon: <SearchOutlined />,
    state: 'search',
  },
];

const user = [
  {
    display: 'favorites',
    path: '/favorites',
    icon: <FavoriteBorderOutlined />,
    state: 'favorite',
  },
  {
    display: 'reviews',
    path: '/reviews',
    icon: <RateReviewOutlined />,
    state: 'reviews',
  },
  {
    display: 'password update',
    path: '/password-update',
    icon: <LockResetOutlined />,
    state: 'password.update',
  },
];

const menuConfig = { main, user };

export default menuConfig;
