import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Grid, Typography, styled} from "@mui/material";
import { useState } from 'react';
import axios from 'axios';
import { SportsEsports } from '@mui/icons-material';

const CustomTextfeild = styled(TextField) (({theme}) => ({
    minWidth:300,
    backgroundColor: theme.palette.secondary.light
    }));

function Signin() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")



    return <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh',backgroundColor:"#302E2B"  }}>
      <Card variant={"outlined"}  style={{ display:"grid", minWidth: 400, padding: 5 , justifyItems:"center",marginTop: -100,}} >
      <Typography variant="h5" padding="10px" marginBottom="40px" display="flex"  alignItems="center" gap="10px">
                SignIn Below! <SportsEsports color='error'/>
            </Typography>

            
                <CustomTextfeild
                    label="Email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <br/>
                <CustomTextfeild
                    label="Password"
                    type={"password"}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
               <br/><br/>
                <Button size="large" color="success" variant="contained" 
                    onClick={async() => {
                        const response = await axios.post("http://localhost:3001/user/signin", {
                            email: email,
                            password: password
                        })
                        let data = response.data;
                        localStorage.setItem("token", data.token);
                        window.location.href = "/"
                    }}> Signin</Button>
                
        
            </Card>
            </Grid>
}


export default Signin;