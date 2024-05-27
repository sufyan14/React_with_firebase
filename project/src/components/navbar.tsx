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
import Image from 'next/image';

function ResponsiveAppBar() {
  const handleAddCheckin = () => {
    console.log('Adding Checkin...');
  };
  const imageContainerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    borderRadius: '15px',
    marginTop: '20px',
  };

  const imageStyle: React.CSSProperties = {
    transform: 'scale(1.2)',
    objectPosition: 'center',
  };
  return (
    <Box sx={{ marginBottom: '20px', marginLeft: '50px', marginTop: '10px', marginRight: '50px', borderRadius: '10px' }}>
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
          <div style={imageContainerStyle}>
            <Image
              src="/assests/img.jpg"
              alt="Example Image"
              layout="fill"
              objectFit="cover"
              style={imageStyle}
            />
          </div>
        </Box>
      </Container>
    </Box>
  );
}
export default ResponsiveAppBar;
