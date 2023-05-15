import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Header from '../components/header';
import MyFooter from "../components/footer.js";
import AboutProject from "../components/AboutProject";
import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

function ProjectInfo(index) {
    const classes = useStyles();
    return (
        <div className="App">
            <Header />
            <AboutProject index={index}/>
            <MyFooter classes={classes}/>
        </div>
    );
}

export default ProjectInfo;