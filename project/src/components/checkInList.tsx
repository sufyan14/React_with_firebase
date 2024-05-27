import { Box, Typography } from '@mui/material';
import { Checkin } from '../components/types'; 

interface CheckinListProps {
  checkins: Checkin[];
}

const CheckinList = ({ checkins }: CheckinListProps) => {
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
        </Box>
      ))}
    </Box>
  );
};

export default CheckinList;
