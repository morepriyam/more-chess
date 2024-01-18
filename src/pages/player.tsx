import { Box, Stack, Typography } from '@mui/material';
import WithMoveValidation from '../components/Chessbrd';
import { useEffect,useState} from 'react';

const Player = () => {
  const [userEmail, setUserEmail] = useState(null);
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      try {
        fetch("http://localhost:3001/user/me", {
          method: "GET",
          headers: {
            "Authorization": "Bearer " + localStorage.getItem("token")
          }
        })
          .then((res) => {
            if (res.ok) {
              return res.json().then((data: { email: any }) => {
                if (data.email) {
                  setUserEmail(data.email);
                }
              });
            } else {
              // Handle error, log, or throw
              console.error("Error fetching user data");
            }
          })
          .catch((error) => {
            // Handle fetch error, log, or throw
            console.error("Error in fetch operation", error);
          });
      } catch (error) {
        // Handle other errors, log, or throw
        console.error("Error in try block", error);
      }
    } else {
      console.log("User not logged in");
    }
  }, []);

  if(userEmail){
  return (
    <Box height="100vh" >
    <Stack direction="row" pt={15} justifyContent="center">
    <WithMoveValidation/>
    </Stack>
    </Box>
  );
  }
  else {
    return <Typography variant='h1'>Login First</Typography>
  }
};

export default Player;