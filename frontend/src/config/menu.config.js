import HomeOutinedIcon from '@mui/icons-material/HomeMaxOutlined';
import SlideshowOutilinedIcon from '@mui/icons-material/SlideshowOutilined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';

const main = [
  {
    display: 'home',
    path: '/',
    icon: <HomeOutinedIcon />,
    state: 'home',
  },
  {
    display: 'movies',
    path: '/movie',
    icon: <SlideshowOutilinedIcon />,
    state: 'movie',
  },
  {
    display: 'tv series',
    path: '/tv',
    icon: <LiveTvOutlinedIcon />,
    state: 'tv',
  },
  {
    display: 'search',
    path: '/search',
    icon: <SearchOutlinedIcon />,
    state: 'search',
  },
];

const user = [
  {
    display: 'favorites',
    path: '/favorites',
    icon: <FavoriteBorderOutlinedIcon />,
    state: 'favorite',
  },
  {
    display: 'reviews',
    path: '/reviews',
    icon: <RateReviewOutlinedIcon />,
    state: 'reviews',
  },
  {
    display: 'password update',
    path: '/password-update',
    icon: <LockResetOutlinedIcon />,
    state: 'password.update',
  },
];

const menuConfig = {main, user}

export default menuConfig;