import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import LoginButton from "./loginButton";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import logoSmartCity from "../assets/img/logo_smart_city_grey.png";
import { createTheme } from "@mui/material/styles";

const pages = [ /* "O nas", */ "Nasze projekty", /* "Timeline", "Kontakt", */ "Piknik Naukowy"];
const routes = [/* "/o-nas", */ "/projekty", /* "/timeline", "/kontakt", */ "/city-page"];
const settings = ["Profil", "Ustawienia", "Wyloguj"];
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xs34: 340,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        position: "fixed",
        width: "97%",
        boxSizing: "border-box",
        borderRadius: "50px",
        background: "hsla(0, 0%, 100%, .40)",
        backdropFilter: "blur(5px)",
        marginTop: ".5rem",
        top: "0",
        left: "50%",
        transform: "translate(-50%, 0)",
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            display: { md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mr: 2, display: { xs: "none", md: "block" } }}>
            <img
              height="75rem"
              style={{ filter: "brightness(10%)", cursor: "pointer" }}
              src={logoSmartCity}
              alt="Smart City logo"
              onClick={() => navigate("/")}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{ color: "black" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={page} onClick={() => navigate(routes[index])}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              height: { xs34: "75px", xs: "60px" },
            }}
            theme={theme}
          >
            <img
              height="inherit"
              style={{ filter: "brightness(10%)", cursor: "pointer" }}
              src={logoSmartCity}
              alt="Smart City logo"
              onClick={() => navigate("/")}
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => navigate(routes[index])}
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  borderRadius: "50px",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.07)",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <LoginButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
