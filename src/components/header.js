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

const pages = ["O nas", "Nasze projekty", "Timeline", "Kontakt", 'Piknik Naukowy'];
const routes = ["/o-nas", "/projekty", "/timeline", "/kontakt", "/city-page"];
const settings = ["Profil", "Ustawienia", "Wyloguj"];

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
      position="sticky"
      sx={{
        width: "auto",
        boxSizing: "border-box",
        borderRadius: "50px",
        background: "hsla(0, 0%, 100%, .30)",
        backdropFilter: "blur(5px)",
        margin: ".5rem .5rem 0 .5rem",
      }}
    >
      <Container>
        <Toolbar
          disableGutters
          sx={{
            display: { md: "flex" },
            justifyContent: { md: "space-between" },
          }}
        >
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
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
              color="inherit"
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
            }}
          >
            <img
              height="75rem"
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
