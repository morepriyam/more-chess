import { Stack } from "@mui/material";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";

export const Homepage = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="space-between"
      height="100vh"
    >
      <Feed />
      <Rightbar />
    </Stack>
  );
};

export default Homepage;
