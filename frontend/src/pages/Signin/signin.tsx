import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";

function Signin() {
    return <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"} color='#ADD8E6'>
                Welcome back. Sign in below
                </Typography>
            </div>
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card variant={"outlined"} style={{width: 400, padding: 20}}>
                <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                    fullWidth={true}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>

                <Button size={"large"} color="inherit" variant="contained" sx={{bgcolor:'#ADD8E6'}}> Signin</Button>
            </Card>
        </div>
    </div>
}

export default Signin;