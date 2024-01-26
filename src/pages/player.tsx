import { Box, Stack } from "@mui/material";
import WithMoveValidation from "../components/Chessbrd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Player = () => {
  const userName = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userName) {
      window.alert("login first");
      navigate("/signin");
    }
  }, [userName, navigate]);

  return (
    <Box height="100vh">
      <Stack direction="row" pt={15} justifyContent="center">
        <WithMoveValidation />
      </Stack>
    </Box>
  );
};

export default Player;
