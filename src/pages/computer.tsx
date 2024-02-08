import WithMoveValidation from "../components/Chessbrd";
import { Box, Stack } from "@mui/material";
// import { useAuth } from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

export const Computer = () => {
  // const userName = useAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!userName) {
  //     window.alert("login first");
  //     navigate("/signin");
  //   }
  // }, [userName, navigate]);  ---Add recoil

  return (
    <Box height="100vh">
      <Stack direction="row" pt={15} justifyContent="center">
        <WithMoveValidation />
      </Stack>
    </Box>
  );
};

export default Computer;
