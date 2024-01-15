import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import './Appbar.css';
import { Cpu, GameController } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AppBar } from '@mui/material';


export default function ButtonAppBar() {
  const navigate = useNavigate()
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    function callback2(data: { email: any }) {
      if (data.email) {
        setUserEmail(data.email)
      }
    }
    function callback1(res: Response) {
      res.json().then(callback2)
    }
    fetch("http://localhost:3001/user/me", {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }).then(callback1)

  })


  if (userEmail) {
    return (
      <AppBar sx={{ flexGrow: 1 }}>
        <Toolbar className='toolbar'>
          <img src='more-chess.png' alt='logo' className='logo' onClick={() => { navigate("/") }} />
          <Button color='inherit' onClick={() => { navigate("/1vs1") }}> <GameController size={60} color="#fec100" weight="thin" /></Button>
          <Button color='inherit' onClick={() => { navigate("/computer") }}><Cpu size={60} color="#fec100" weight="thin" /></Button>
          <Button variant="contained" onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/";
          }}> {userEmail}&nbsp;</Button>
        </Toolbar>
      </AppBar>
    );

  } else {

    return (
      <AppBar sx={{ flexGrow: 1 }}>
        <Toolbar className='toolbar'>
          <img src='more-chess2.png' alt='logo' className='logo' onClick={() => { navigate("/") }} />
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: 10 }}>
              <Button variant="contained"  onClick={() => { navigate("/signup") }}>Signup</Button>
            </div>
            <div>
              <Button variant="contained" color='secondary' onClick={() => { navigate("/signin") }}>Signin</Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    );

  }

}


