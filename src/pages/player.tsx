import { Box, Stack } from '@mui/material';
import WithMoveValidation from '../components/Chessbrd';
import Sidebar from '../components/Sidebar';

const Player = () => {
  return (<Box height="100vh" width="100vw">
    <Sidebar/>
    <Stack direction="row" p={10} justifyContent="center">
    <WithMoveValidation/>
    </Stack>
    </Box>
  );
};

export default Player;