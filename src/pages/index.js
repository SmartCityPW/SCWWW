import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/header";
import MyFooter from "../components/footer.js";
import Hero from "../components/hero.js";
import heroImage from "../assets/img/hero_img_2.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";
import { Container } from "@mui/system";

const useStyles = makeStyles(errorPageStyle);

function Index() {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="App" bgcolor="#aeaeae">
      <Hero image={heroImage}>
        <Header />
        <Container
          sx={{
            display: "flex",
            height: "70vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3" component="h1" color="#FFFFFF">
            Międzywydziałowe Koło Naukowe Smart City PW
          </Typography>
        </Container>
      </Hero>
      <MyFooter classes={classes} />
    </Box>
  );
}
export default Index;
