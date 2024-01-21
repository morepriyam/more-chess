import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      bgcolor="green"
      p={2}
      flex={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Right Bar
    </Box>
  );
};

export default Rightbar;
