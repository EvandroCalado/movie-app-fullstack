import menuConfig from '../../config/menu.config';
import { themeModes } from '../../config/theme.config';
import { setAuthModalOpen } from '../../redux/features/authModalSlice';
import { setThemeMode } from '../../redux/features/themeModeSlice';
import Logo from './Logo';
import { useSelector, useDispatch } from 'react-redux';
import { cloneElement, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { DarkModeOutlined, WbSunnyOutlined } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import UserMenu from './UserMenu';

const ScrollAppBar = ({ children, window }) => {
  const { themeMode } = useSelector((state) => state.themeMode);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    sx: {
      color: trigger
        ? 'text.primary'
        : themeMode === themeModes.dark
        ? 'primary.contrastText'
        : 'text.primary',
      backgroundColor: trigger
        ? 'background.paper'
        : themeMode === themeModes.dark
        ? 'transparent'
        : 'background.paper',
    },
  });
};

const Topbar = () => {
  const { user } = useSelector((state) => state.user);
  const { appState } = useSelector((state) => state.appState);
  const { themeMode } = useSelector((state) => state.themeMode);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dispatch = useDispatch();

  const onSwithTheme = () => {
    const theme =
      themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
    dispatch(setThemeMode(theme));
  };

  return (
    <>
      <ScrollAppBar>
        <AppBar elevation={0} sx={{ zIndex: 9999 }}>
          <Toolbar
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                color="inherit"
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <Menu />
              </IconButton>
              <Box
                sx={{
                  display: { sx: 'inline-block', mb: 'none' }}}
              >
                <Logo/>
              </Box>
            </Stack>
            <Box
              flexGrow={1}
              alignItems="center"
              display={{ sx: 'none', mb: 'flex' }}
            >
              {/* <Box sx={{marginRight: "30px"}} >
                    <Logo />
                </Box> */}
              {menuConfig.main.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: appState.includes(item.state)
                      ? 'primary.contrastText'
                      : 'inherit',
                    mr: 2,
                  }}
                  component={Link}
                  to={item.path}
                  variant={appState.includes(item.state) ? 'contained' : 'text'}
                >
                  {item.display}
                </Button>
              ))}
              <IconButton
              sx={{color: "inherit"}}
              onClick={onSwithTheme}
              >
                {themeMode === themeModes.dark && <DarkModeOutlined/>}
                {themeMode === themeModes.light && <WbSunnyOutlined/>}
              </IconButton>
            </Box>

                <UserMenu/>

          </Toolbar>
        </AppBar>
      </ScrollAppBar>
    </>
  );
};

export default Topbar;
