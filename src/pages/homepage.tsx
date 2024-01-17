import { Stack } from "@mui/material";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Sidebar from "../components/Sidebar";

export const Homepage = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent="space-between" >
        <Sidebar/>
        <Feed/>
        <Rightbar/>   
  </Stack>
)
}


export default Homepage;
