import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import Button from '@mui/material/Button';

function ResponsiveAppBar() {
    const handleAddCheckin = () => {
        console.log('Adding Checkin...');
      };
  return (
    <Box sx={{ marginBottom: '20px', marginLeft: '50px',marginTop: '10px', marginRight: '50px',borderRadius: '10px' }}>
      <AppBar position="static" sx={{ borderRadius: '10px' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="User" src="/static/images/avatar.jpg" />
              </IconButton>
            </Tooltip>

          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ position: 'relative', width: '100%', marginBottom: '20px' }}>
          <img src="https://via.placeholder.com/2000x500" alt="Dummy Image" style={{ width: '100%', borderRadius: '10px' }} />
        </Box>
      </Container>
    </Box>
  );
}
export default ResponsiveAppBar;
