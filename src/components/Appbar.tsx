import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Cpu, GameController } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { useState,  useEffect } from 'react';
import { AppBar, Avatar, Badge, Box, Menu, MenuItem, Stack, Typography, styled } from '@mui/material';
import { Mail, Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar) ({
  display:"flex",
  justifyContent:"space-between",
  height:"60px",
  paddingRight:"20px",
  borderWidth:"1px",
  borderBottomRightRadius:"outset",
  backgroundColor:"#262522"
})

const Icons = styled(Box)(({theme}) => ({
  display:"none",
  gap:"20px",
  alignItems:"center",
  [theme.breakpoints.up("sm")] :{
    display:"flex"
  }
  
}))

const UserBox = styled(Box)(({theme}) => ({
  display:"flex",
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")] :{
    display:"none"
  }
}))

export default function ButtonAppBar() {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState(null);
  const [open,setOpen] = useState(false);
  const [open1,setOpen1] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("token")){
      try {
        fetch("http://localhost:3001/user/me", {
        method: "GET",
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }).then((res) => {
        res.json().then((data: { email: any }) => {if (data.email) {
          setUserEmail(data.email)
        }})
      })
      } catch (error) {
       return 
      }
    }
    else {
      console.log("User not logged in")
    }
    
    })

 

  if (userEmail) {
    return (
      <AppBar position='sticky'>
        <StyledToolbar>
        <Typography variant='h4' sx={{display:{xs:"none",sm:"block"},cursor:"pointer"}} onClick={e => setOpen1(true) } >M-Chess</Typography>
          <Box component="img" src='more-chess.png' alt='logo' sx={{display:{xs:"block",sm:"none"},height:"25px" , width:"32px"}} onClick={e => setOpen1(true) } />
          <Button color='inherit' onClick={() => { navigate("/1vs1") }}> <GameController size={40} color="#fec100" weight="thin" /></Button>
          <Button color='inherit' onClick={() => { navigate("/computer") }}><Cpu size={40} color="#fec100" weight="thin" /></Button>
          <Icons>
            <Badge badgeContent={4} color='error'><Mail/></Badge>
            <Badge badgeContent={4} color='error'><Notifications/></Badge>
            <Avatar sx={{width:30,height:30}} src='https://img.freepik.com/free-photo/headshot-charismatic-pleasant-friendly-european-woman-short-chestnut-haircut-smiling-positive-feeling-happy-upbeat-enjoying-lifes-casually-talking-friends-amused-cheerful-standing-white-background_176420-34680.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705276800&semt=ais' 
            onClick={e => setOpen(true) }/>
          </Icons>
          <UserBox onClick={e => setOpen(true) } >
          <Avatar sx={{width:30,height:30}} src='https://img.freepik.com/free-photo/headshot-charismatic-pleasant-friendly-european-woman-short-chestnut-haircut-smiling-positive-feeling-happy-upbeat-enjoying-lifes-casually-talking-friends-amused-cheerful-standing-white-background_176420-34680.jpg?size=626&ext=jpg&ga=GA1.1.632798143.1705276800&semt=ais'></Avatar>
          <Typography component="span">Priyam</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/";
  }} >Logout</MenuItem>
      </Menu>
      </AppBar>
    );

  } else {

    return (
      <AppBar color='secondary' position='sticky'>
        <StyledToolbar>
          <Typography variant='h4' sx={{display:{xs:"none",sm:"block"},cursor:"pointer"}} onClick={() => { navigate("/") }} >M-Chess</Typography>
          <Box component="img" src='more-chess2.png' alt='logo' sx={{display:{xs:"block",sm:"none"}, height:"25px" , width:"32px" }} onClick={() => { navigate("/") }} />
          <Stack direction="row" spacing={2}>
              <Button variant="outlined" color='success' onClick={() => { navigate("/signup") }}>Signup</Button>
              <Button variant="contained" color='success' onClick={() => { navigate("/signin") }}>Signin</Button>
          </Stack>
        </StyledToolbar>
      </AppBar>
    );

  }

}