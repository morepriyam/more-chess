import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { Card, Grid, Typography, styled } from "@mui/material";
import { useState } from 'react';
import axios from 'axios';
import { SportsEsports } from '@mui/icons-material';

function Signup() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const CustomTextfeild = styled(TextField) (({theme}) => ({
        minWidth:500,
        backgroundColor: theme.palette.divider
        
    }));
    
    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:3001/user/signup", {
                email: email,
                password: password,
            });
            let data = response.data;
            localStorage.setItem("token", data.token);
            window.location.href = "/"
        } catch (e: any) {
            if (e.response) {
                setError(e.response.data.customError);
            } else {
                console.error("Error during API request:", e.message);
            }
        }
    };

    return <Grid container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh' }}>
      <Card variant={"outlined"}  style={{ display:"grid", minWidth: 400, padding: 30 , justifyItems:"center"}} >
            <Typography variant="h5" padding="10px" >
                Welcome To More-Chess!
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
                    onClick={handleSubmit} > SignUp</Button>
                
                <Typography color="primary">{error}</Typography>
        
            </Card>
            </Grid>
}

export default Signup;