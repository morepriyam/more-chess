import { Box, Stack } from "@mui/material";
import WithMoveValidation from "../components/Chessbrd";

const Player = () => {
  return (
    <Box height="100vh">
      <Stack direction="row" pt={15} justifyContent="center">
        <WithMoveValidation />
      </Stack>
    </Box>
  );
};

export default Player;
