import * as React from "react";
import Footer from "../components/Footer/Footer.js";
// @material-ui/icons
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import logoSmartCity from "../assets/img/logo_smart_city_grey.png";
import { createTheme } from "@mui/material/styles";

const pages = ["O nas", "Nasze projekty", "Timeline", "Kontakt", "Piknik Naukowy"];
const routes = ["/o-nas", "/projekty", "/timeline", "/kontakt", "/city-page"];
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      xs29: 290,
      sm55: 550,
      sm: 600,
      md: 900,
      md10: 992,
      lg: 1200,
      xl: 1536,
    },
  },
});

const MyFooter = ({ classes }) => {
  const navigate = useNavigate();
  return (
    <Footer>
      <Box
        sx={{
          display: "grid",
          "grid-template-columns": { md10: "repeat(3, auto)", md: "repeat(2, auto)" },
          "grid-template-rows": { sm: "repeat(2, auto)" },
          "row-gap": { md10: "1rem", xs: "2rem" },
          "margin-bottom": { xs: "2rem" },
        }}
        theme={theme}
      >
        <Box
          sx={{
            display: "flex",
            "flex-direction": "column",
            "align-items": { sm55: "start", xs: "center" },
            "text-align": { sm55: "left", xs: "center" },
          }}
          theme={theme}
        >
          <img
            height="80rem"
            style={{ filter: "brightness(10%)", cursor: "pointer" }}
            src={logoSmartCity}
            alt="Smart City logo"
            onClick={() => navigate("/")}
          />
          <Box>
            <p style={{ color: "#000000", "font-size": "15px" }}>
              Politechnika Warszawska
              <br />
              Wydział Inżynierii Lądowej (pok. 308)
              <br />
              Al. Armii Ludowej 16, 00-637 Warszawa
            </p>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            "grid-template-columns": {
              lg: `repeat(${pages.length}, auto)`,
              md10: `repeat(${Math.ceil(pages.length / 2)}, auto)`,
              sm55: `repeat(${pages.length}, auto)`,
              xs29: "repeat(2, auto)",
              xs: "auto",
            },
            "grid-template-rows": { lg: "auto", md10: "repeat(2, 2rem)" },
            "grid-row": { md10: "1", sm55: "2" },
            "grid-column": { md10: "2", sm55: "1/3" },
            "justify-self": "center",
            "align-self": "end",
            "align-items": "end",
            "gap": { lg: "0", md10: "1rem" },
            "text-align": { xs29: "left", xs: "center" },
          }}
          theme={theme}
        >
          {pages.map((page, index) => (
            <a
              style={{ cursor: "pointer" }}
              key={page}
              onClick={() => navigate(routes[index])}
              target="_blank"
              className={classes.block}
            >
              {page}
            </a>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            "align-items": "flex-end",
            "justify-content": { sm55: "right", xs: "center" },
          }}
          theme={theme}
        >
          <a href="https://www.facebook.com/smartcitypw" target="_blank" className={classes.block}>
            MKNSC
          </a>
          <a href="https://www.facebook.com/wilpw" target="_blank" className={classes.block}>
            WIL
          </a>
          <a href="https://www.facebook.com/politechnika.warszawska" className={classes.block}>
            PW
          </a>
        </Box>
      </Box>
      <Box>
        <p style={{ color: "#444444", "font-size": "13px" }}>&copy; MKN Smart City PW {1900 + new Date().getYear()}</p>
      </Box>
    </Footer>
  );
};

export default MyFooter;
