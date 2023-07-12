import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './Appbar.css';
import {Cpu,GameController} from 'phosphor-react';
import { useNavigate } from 'react-router-dom';


export default function ButtonAppBar() {
    const navigate = useNavigate() 
 

// have to add a auth logic that renders the right page and add initial to variable

 if (true) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar className='toolbar'>
              <img src='more-chess.png' alt='more-chess2.png' className='logo' onClick={() => {navigate("/")}}/>
              <div className='main'>
              <Button color='inherit' onClick={() => {navigate("/1vs1")}}> <GameController size={60} color="#C6AA6B" weight="light" /></Button>
              <Button color='inherit' onClick={() => {navigate("/computer")}}><Cpu size={60} color="#C6AA6B" weight="light" /></Button>
              <Button color="inherit" variant="outlined" sx={{bgcolor:"#21262D"}}>SignOut&nbsp;</Button>
              </div>
            </Toolbar>
        </Box>
      );
    
 } else {

return(
    <Box sx={{ flexGrow: 1 }}>
    <Toolbar className='toolbar'>
      <img src='more-chess2.png' alt='more-chess.png' className='logo' onClick={() => {navigate("/")}}/>
      <div style={{display: "flex"}}>
        <div style={{marginRight: 10}}>
        <Button color="inherit" variant="outlined" sx={{bgcolor:"#21262D"}} onClick={() => {navigate("/signup")}}>Signup</Button>
        </div>
        <div>
        <Button color="inherit" variant="outlined" sx={{bgcolor:"#21262D"}} onClick={() => {navigate("/signin")}}>Signin</Button>
        </div>
      </div>
    </Toolbar>
    </Box>
    );
    
 }
   
}


