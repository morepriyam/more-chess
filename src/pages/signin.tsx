import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Grid, Typography, styled } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { VpnKey } from "@mui/icons-material";

const CustomTextfeild = styled(TextField)(({ theme }) => ({
  minWidth: 400,
  backgroundColor: theme.palette.secondary.light,
}));

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgcolor="#302E2B"
    >
      <Card
        variant={"outlined"}
        style={{
          display: "grid",
          minWidth: 500,
          padding: 10,
          paddingBottom: 30,
          justifyItems: "center",
          marginTop: -120,
        }}
      >
        <Typography
          variant="h5"
          padding="10px"
          marginBottom="40px"
          display="flex"
          alignItems="center"
          gap="10px"
        >
          Sign-In.. Below! <VpnKey color="warning" />
        </Typography>

        <CustomTextfeild
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <CustomTextfeild
          label="Password"
          type={"password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <Button
          size="large"
          color="success"
          variant="contained"
          onClick={async () => {
            const response = await axios.post(
              "http://localhost:3001/user/signin",
              {
                email: email,
                password: password,
              }
            );
            let data = response.data;
            localStorage.setItem("token", data.token);
            window.location.href = "/";
          }}
        >
          {" "}
          Signin
        </Button>
      </Card>
    </Grid>
  );
}

export default Signin;
