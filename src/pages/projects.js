import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Header from '../components/header';
import MyFooter from "../components/footer.js";
import AllProjects from "../components/AllProjects";
import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

function Projects() {
    const classes = useStyles();
    return (
        <div className="App">
            <Header />
            <AllProjects/>
            <MyFooter classes={classes}/>
        </div>
    );
}

export default Projects;
