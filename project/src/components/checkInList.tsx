import { Box, Typography } from '@mui/material';

interface Checkin {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface CheckinListProps {
  checkins: Checkin[];
}

const CheckinList = ({ checkins }: CheckinListProps) => {
  return (
    <Box sx={{padding: 2, display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
  {checkins.map(checkin => (
    <Box
      key={checkin.id}
      sx={{
        display: 'flex',
        flexDirection: 'column', // Stack content vertically
        alignItems: 'center',
        margin: 2,
        border: '1px solid #ccc',
        borderRadius: 2,
        padding: 2,
        width: '300px',
        height: 'auto', // Adjust height to content
        overflow: 'hidden', // Ensures content doesn't overflow
        textOverflow: 'ellipsis', // Adds ellipsis to overflowing text
        whiteSpace: 'nowrap', // Keeps text on a single line
        flex: '1 0 300px', // Allow boxes to grow and shrink, with a preferred width of 300px
        maxWidth: '300px', // Ensure boxes don't exceed 300px width
      }}
    >
      <img
        src={checkin.image}
        alt={checkin.name}
        style={{ width: '250px', height: '150px', marginBottom: '10px' }} // Adjust margin to add space below image
      />
      <Typography variant="h6" sx={{ marginBottom: '4px', textAlign: 'center' }}>
        {checkin.name} - CheckedIn
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
