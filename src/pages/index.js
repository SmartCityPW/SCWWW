import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/header";
import MyFooter from "../components/footer.js";
import Hero from "../components/hero.js";
import heroImage from "../assets/img/hero_img_2.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";
import { Container } from "@mui/system";

const useStyles = makeStyles(errorPageStyle);

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm37: 370,
      sm44: 440,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

function Index() {
  const windowWidth = useWindowWidth();

  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="App" bgcolor="#aeaeae">
      <Header />
      <Hero image={heroImage}>
        <Container
          sx={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontSize: { md: "5vw", sm: "4rem", sm44: "3rem", sm37: "2.5rem", xs: "2rem" } }}
            color="#FFFFFF"
            theme={theme}
          >
            Międzywydziałowe {windowWidth < 900 || windowWidth > 1500 ? <br /> : ""} Koło Naukowe <br /> Smart City PW
          </Typography>
        </Container>
      </Hero>
      <MyFooter classes={classes} />
    </Box>
  );
}

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(undefined);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowWidth;
}

export default Index;
