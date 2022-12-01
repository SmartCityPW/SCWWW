import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Header from '../components/header';
import MyFooter from "../components/footer.js";
import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";

import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

import image from "../assets/img/clint-mckoy.jpg";

const useStyles = makeStyles(errorPageStyle);

function Error404() {
    const classes = useStyles();
    return (
        <div className="App">
            <Header />
            <div
                className={classes.pageHeader}
                style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                }}
            >
                <div className={classes.contentCenter}>
                <GridContainer>
                    <GridItem md={12}>
                    <h1 className={classes.title}>404</h1>
                    <h2 className={classes.subTitle}>Nie ma takiej strony :(</h2>
                    <h4 className={classes.description}>
                        <a href="/">Idź do strony głównej!</a>
                    </h4>
                    </GridItem>
                </GridContainer>
                </div>
            </div>
            <MyFooter classes={classes}/>
        </div>
    );
}

export default Error404;
