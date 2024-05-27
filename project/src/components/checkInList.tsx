import { Box, Typography, Button } from '@mui/material';

interface Checkin {
  id: string;
  name: string;
  description: string;
  image: string;
  user: string;
}

interface CheckinListProps {
  checkins: Checkin[];
  onDelete: (id: string) => void;
}

const CheckinList = ({ checkins, onDelete }: CheckinListProps) => {
  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
      {checkins.map(checkin => (
        <Box
          key={checkin.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: 2,
            border: '1px solid #ccc',
            borderRadius: 2,
            padding: 2,
            width: '300px',
            height: 'auto',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flex: '1 0 300px',
            maxWidth: '300px',
          }}
        >
          <img
            src={checkin.image}
            alt={checkin.name}
            style={{ width: '250px', height: '150px', marginBottom: '10px' }}
          />
          <Typography variant="h6" sx={{ marginBottom: '4px', textAlign: 'center' }}>
            {checkin.name} - CheckedIn by {checkin.user}
          </Typography>
          <Typography sx={{ textAlign: 'center' }}>
            {checkin.description}
          </Typography>
          <Button variant="contained" color="secondary" onClick={() => onDelete(checkin.id)} sx={{ marginTop: '10px' }}>
            Delete
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default CheckinList;
