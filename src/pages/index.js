import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/header";
import MyFooter from "../components/footer.js";

import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";

const useStyles = makeStyles(errorPageStyle);

function Index() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <h1>Strona Główna</h1>
      <MyFooter classes={classes} />
    </div>
  );
}
export default Index;
