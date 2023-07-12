import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import { useState } from 'react';


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
                <Typography variant={"h6"} color='#ADD8E6'>
                Welcome to More-Chess.<br/><center>Signup!</center> 
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

                <Button size={"large"} color="inherit" variant="contained" sx={{bgcolor:'#ADD8E6'}}  
                onClick={() => {
                    function callback2(data: { token: string }) {
                        localStorage.setItem("token", data.token);
                        window.location.href = "/"

                    }
                    function callback1(res: Response) {
                        res.json().then(callback2)
                    }
                    fetch("http://localhost:3001/login/signup", {
                        method: "POST",
                        body: JSON.stringify({
                            email: email,
                            password: password
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }
                    })
                    .then(callback1)
                }}
                > SignUp</Button>
            </Card>
        </div>
    </div>
}

export default Signup;