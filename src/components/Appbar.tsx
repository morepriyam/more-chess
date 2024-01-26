import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Cpu, GameController } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import { useAuth } from "../hooks/useAuth";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  height: "90px",
  backgroundColor: "#262522",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export default function ButtonAppBar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const userName = useAuth(); //Custom hook

  const toggleSidebar = () => {
    setOpen1(!open1);
  };

  if (userName) {
    return (
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h4"
            fontWeight={300}
            sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
            onClick={toggleSidebar}
          >
            Chess.more
          </Typography>
          <Box
            component="img"
            src="more-chess.png"
            alt="logo"
            sx={{
              display: { xs: "block", sm: "none" },
              height: "25px",
              width: "32px",
              cursor: "pointer",
            }}
            onClick={toggleSidebar}
          />
          <Button
            color="inherit"
            onClick={() => {
              navigate("/1vs1");
            }}
          >
            {" "}
            <GameController size={53} color="#A7E16A" weight="thin" />
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              navigate("/computer");
            }}
          >
            <Cpu size={53} color="#A7E16A" weight="thin" />
          </Button>
          <Icons sx={{ cursor: "pointer" }}>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
              <Notifications />
            </Badge>
            <Avatar
              sx={{ width: 40, height: 40 }}
              src="https://pbs.twimg.com/profile_images/1669958005750734848/Y2x-zpAv_400x400.jpg"
              onClick={(e) => setOpen(true)}
            />
          </Icons>
          <UserBox onClick={(e) => setOpen(true)}>
            <Avatar
              sx={{ width: 40, height: 40 }}
              src="https://pbs.twimg.com/profile_images/1669958005750734848/Y2x-zpAv_400x400.jpg"
            ></Avatar>
            <Typography component="span">Priyam</Typography>
          </UserBox>
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem sx={{ cursor: "pointer" }}>{userName}</MenuItem>
          <MenuItem sx={{ cursor: "pointer" }}>Settings</MenuItem>
          <MenuItem
            sx={{ cursor: "pointer" }}
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Logout
          </MenuItem>
        </Menu>
        <Sidebar isOpen={open1} />
      </AppBar>
    );
  } else {
    return (
      <AppBar color="secondary" position="sticky">
        <StyledToolbar>
          <Typography
            variant="h4"
            fontWeight={300}
            sx={{ display: { xs: "none", sm: "block" }, cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Chess.more
          </Typography>
          <Box
            component="img"
            src="more-chess2.png"
            alt="logo"
            sx={{
              display: { xs: "block", sm: "none" },
              height: "25px",
              width: "32px",
            }}
            onClick={() => {
              navigate("/");
            }}
          />
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Signin
            </Button>
          </Stack>
        </StyledToolbar>
      </AppBar>
    );
  }
}
