import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';

interface CheckinDialogProps {
  open: boolean;
  handleClose: () => void;
  handleAddCheckin: () => void;
  newCheckin: { name: string, description: string, image: string };
  setNewCheckin: (checkin: { name: string, description: string, image: string }) => void;
}

const CheckinDialog = ({ open, handleClose, handleAddCheckin, newCheckin, setNewCheckin }: CheckinDialogProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add a New Checkin</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter the details of the place you want to check in.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Name"
          fullWidth
          variant="outlined"
          value={newCheckin.name}
          onChange={(e) => setNewCheckin({ ...newCheckin, name: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Description"
          fullWidth
          variant="outlined"
          value={newCheckin.description}
          onChange={(e) => setNewCheckin({ ...newCheckin, description: e.target.value })}
        />
        <TextField
          margin="dense"
          label="Image URL"
          fullWidth
          variant="outlined"
          value={newCheckin.image}
          onChange={(e) => setNewCheckin({ ...newCheckin, image: e.target.value })}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAddCheckin}>Add Checkin</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CheckinDialog;
