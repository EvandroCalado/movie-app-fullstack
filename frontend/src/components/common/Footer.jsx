import { Box, Paper, Stack, Button } from '@mui/material';
import Container from './Container';
import Logo from '../common/Logo';
import menuConfig from '../../config/menu.config';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <Paper square={true} sx={{ backgroundImage: 'unset', padding: '2rem' }}>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction={{ sx: 'column', md: 'row' }}
          sx={{ height: 'max-content' }}
        >
          <Logo />
          <Box>
            {menuConfig.main.map((item, index) => (
              <Button
                key={index}
                sx={{ color: 'inherit' }}
                component={Link}
                to={item.path}
              >
                {item.display}
              </Button>
            ))}
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Footer;
