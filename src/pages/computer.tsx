import WithMoveValidation from "../components/Chessbrd";
import { Box, Stack, Typography } from "@mui/material";
import { useAuth } from "../hooks/useAuth";

export const Computer = () => {
  const userEmail = useAuth();

  if (userEmail) {
    return (
      <Box height="100vh">
        <Stack direction="row" pt={15} justifyContent="center">
          <WithMoveValidation />
        </Stack>
      </Box>
    );
  } else {
    return <Typography variant="h1">Login First</Typography>;
  }
};

export default Computer;
