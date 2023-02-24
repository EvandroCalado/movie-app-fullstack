import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import menuConfig from '../../config/menu.config';
import { setUser } from '../../redux/features/userSlice';
import { LogoutOutlined } from '@mui/icons-material';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  Typography,
} from '@mui/material';

const UserMenu = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [anchorElement, setAnchorElement] = useState(null);

  const toggleMenu = (e) => setAnchorElement(e.currentTarget);

  return (
    <>
      {user && (
        <>
          <Typography
            variant="h6"
            sx={{ cursor: 'pointer', userSelect: 'none' }}
            onCLick={toggleMenu}
          >
            {user.displayName}
          </Typography>
          <Menu
            open={Boolean(anchorElement)}
            anchorEl={anchorElement}
            onClose={() => setAnchorElement(null)}
            PaperProps={{ sx: { padding: 0 } }}
          >
            {menuConfig.user.map((item, index) => (
              <ListItemButton
                component={Link}
                to={item.path}
                key={index}
                onCLick={() => setAnchorElement(null)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText
                  disableTypography
                  primary={
                    <Typography textTransform="uppercase">
                      {item.display}
                    </Typography>
                  }
                />
              </ListItemButton>
            ))}
            <ListItemButton
              sx={{ borderRadius: '10px' }}
              onCLick={() => dispatch(setUser(null))}
            >
              <ListItemIcon>
                <LogoutOutlined />
              </ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Typography textTransform="uppercase">sign out</Typography>
                }
              />
            </ListItemButton>
          </Menu>
        </>
      )}
    </>
  );
};

export default UserMenu;
