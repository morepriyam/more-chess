import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import { useState } from 'react';
import axios from 'axios';


function Signup() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h5"} sx={{color: '#FFFFFF',fontFamily:'monospace'}}>
                Welcome To More-Chess!
                </Typography>
            </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card variant={"outlined"} style={{width: 400, padding: 20}}>
                <TextField
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <br/><br/>
                <TextField
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <br/><br/>

                <Button size={"large"} color="inherit" variant="contained" sx={{color: '#000000',backgroundColor:'#fec100'}}
                onClick={async() => {
                    const response = await axios.post("http://localhost:3001/user/signup", {
                        email: email,
                        password: password
                    })
                    let data = response.data;
                    localStorage.setItem("token", data.token);
                    window.location.href = "/"
                }}
                
                > SignUp</Button>
            </Card>
        </div>
    </div>
}

export default Signup;