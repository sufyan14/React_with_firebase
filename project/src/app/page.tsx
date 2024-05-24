'use client';

import { Box, Button } from '@mui/material';
import { useState } from 'react';
import Navbar from '../components/navbar';
import CheckinDialog from '../components/checkInDialog';
import CheckinList from '../components/checkInList';

const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [checkins, setCheckins] = useState([]);
  const [newCheckin, setNewCheckin] = useState({ name: '', description: '', image: '' });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCheckin = () => {
    setCheckins([...checkins, { ...newCheckin, id: Date.now() }]);
    setOpen(false);
  };

  return (
    <Box>
      <Navbar />
      <Box sx={{ position: 'relative', textAlign: 'center' }}>
        <img src="./assests/img.jpg" alt="Landing" style={{ width: '100%', height: 'auto' }} />
        <Button variant="contained" color="primary" onClick={handleOpen} sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          Add Checkin
        </Button>
      </Box>
      <CheckinList checkins={checkins} />
      <CheckinDialog open={open} handleClose={handleClose} handleAddCheckin={handleAddCheckin} newCheckin={newCheckin} setNewCheckin={setNewCheckin} />
    </Box>
  );
};

export default HomePage;
