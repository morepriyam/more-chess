import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Grid, Typography, styled} from "@mui/material";
import { useState } from 'react';
import axios from 'axios';
import { SportsEsports } from '@mui/icons-material';

function Signin() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const CustomTextfeild = styled(TextField) (({theme}) => ({
        minWidth:500,
        backgroundColor: theme.palette.divider
        
    }));

    return <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh' }}>
      <Card variant={"outlined"}  style={{ display:"grid", minWidth: 400, padding: 30 , justifyItems:"center"}} >
            <Typography variant="h5" padding="10px" >
            Welcome Back!
            </Typography>
            <SportsEsports sx={{marginBottom:"40px"}}/>

            
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
                <Button size="large" color="secondary" variant="contained" 
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