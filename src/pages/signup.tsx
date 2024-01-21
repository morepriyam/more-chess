import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Grid, Typography, styled } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { SportsEsports } from "@mui/icons-material";

const CustomTextfeild = styled(TextField)(({ theme }) => ({
  minWidth: 400,
  backgroundColor: theme.palette.secondary.light,
}));

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3001/user/signup", {
        email: email,
        password: password,
      });
      let data = response.data;
      localStorage.setItem("token", data.token);
      window.location.href = "/";
    } catch (e: any) {
      if (e.response) {
        setError(e.response.data.customError);
      } else {
        console.error("Error during API request:", e.message);
      }
    }
  };

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
          <SportsEsports color="warning" /> Welcome To More-Chess....
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
          onClick={handleSubmit}
        >
          {" "}
          SignUp
        </Button>

        <Typography mt="20px" color="#09A7DE">
          {error}
        </Typography>
      </Card>
    </Grid>
  );
}

export default Signup;
