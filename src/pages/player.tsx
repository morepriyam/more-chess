import { Box, Stack } from '@mui/material';
import WithMoveValidation from '../components/Chessbrd';

const Player = () => {
  return (<Box height="100vh" width="100vw" sx={{backgroundColor:"#302E2B"}}>
    <Stack direction="row" pt={15} justifyContent="center">
    <WithMoveValidation/>
    </Stack>
    </Box>
  );
};

export default Player;