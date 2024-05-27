'use client';

import { Box, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import CheckinDialog from '../components/checkInDialog';
import CheckinList from '../components/checkInList';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

interface Checkin {
  id: string,
  name: string,
  description: string,
  image: string,
  user: string
}

const HomePage = () => {
  
  const [open, setOpen] = useState(false);
  const [checkins, setCheckins] = useState<Checkin[]>([]);
  const [newCheckin, setNewCheckin] = useState({ id: '', name: '', description: '', image: '', user: '' });

  useEffect(() => {
    const fetchCheckins = async () => {
      const querySnapshot = await getDocs(collection(db, 'checkins'));
      const checkinList: Checkin[] = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          description: data.description,
          image: data.image,
          user: data.user,
        };
      });
      setCheckins(checkinList);
    };

    fetchCheckins();
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCheckin = async () => {
    const docRef = await addDoc(collection(db, 'checkins'), newCheckin);
    setCheckins([...checkins, { ...newCheckin, id: docRef.id }]);
    setOpen(false);
  };

  return (
    <Box>
      <Navbar />
      <Box sx={{ position: 'relative', textAlign: 'center' }}>
        <img src="./assets/img.jpg" alt="Landing" style={{ width: '100%', height: 'auto' }} />
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
