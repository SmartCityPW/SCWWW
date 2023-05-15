import * as React from "react";
import Footer from "../components/Footer/Footer.js";
// @material-ui/icons
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import logoSmartCity from "../assets/img/logo_smart_city_grey.png";

const pages = ["O nas", "Nasze projekty", "Timeline", "Kontakt"];
const routes = ["/o-nas", "/projekty", "/timeline", "/kontakt"];

const MyFooter = ({ classes }) => {
  const navigate = useNavigate();
  return (
    <Footer>
      <Box
        sx={{
          display: "flex",
          "justify-content": "space-between",
          "align-items": "flex-end",
          flex: "50px 50px",
        }}
      >
        <Box sx={{ width: "20rem" }}>
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
            width: "23rem",
            display: "flex",
            "align-items": "flex-end",
            "justify-content": "center",
          }}
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
            width: "20rem",
            "align-items": "flex-end",
            "justify-content": "right",
          }}
        >
          <a
            href="https://www.facebook.com/smartcitypw"
            target="_blank"
            className={classes.block}
          >
            MKNSC
          </a>
          <a
            href="https://www.facebook.com/wilpw"
            target="_blank"
            className={classes.block}
          >
            WIL
          </a>
          <a
            href="https://www.facebook.com/politechnika.warszawska"
            className={classes.block}
          >
            PW
          </a>
        </Box>
      </Box>
      <Box>
        <p style={{ color: "#444444", "font-size": "13px" }}>
          &copy; MKN Smart City PW {1900 + new Date().getYear()}
        </p>
      </Box>
    </Footer>
  );
};

export default MyFooter;
