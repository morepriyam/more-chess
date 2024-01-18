import WithMoveValidation from '../components/Chessbrd'
import { Box, Stack } from '@mui/material';

export const Computer = () => {
  return (<Box height="100vh" width="100vw"  sx={{backgroundColor:"#302E2B"}}>
  <Stack direction="row" pt={15} justifyContent="center">
  <WithMoveValidation/>
  </Stack>
  </Box>
)
}


export default Computer;
