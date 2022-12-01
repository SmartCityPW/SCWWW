import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Header from '../components/header';
import MyFooter from "../components/footer.js";

import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

import InfoArea from "../components/InfoArea/InfoArea.js";
import styles from "../assets/jss/material-kit-pro-react/components/infoStyle.js";
import SectionCarousel from "../components/partners_carousel.js";
import FacebookPage from '../components/facebook.js';

import GridContainer from "../components/Grid/GridContainer.js";
import GridItem from "../components/Grid/GridItem.js";


const useStyles = makeStyles(errorPageStyle);

function Index() {
    const classes = useStyles();
    styles.infoArea.maxWidth="600px";
    return (
        <div className="App">
            <Header />
            <GridContainer style={{justifyContent: "center"}}>
                <GridItem xs={7} sm={7} md={7}>
                    <h1>Strona Główna</h1>
                    <div>
                        <p>
                        Członkowie Smart City PW są studentami różnych wydziałów Politechniki Warszawskiej. 
                        Jesteśmy interdyscyplinarnym, rozwijającym się teamem, który chce wcielać w życie wizję inteligentnych miast. 
                        Uważamy, że nauka nie powinna zamykać się na uczelni, ale służyć każdemu człowiekowi, dlatego nasze projekty 
                        realizujemy m.in. we współpracy ze społecznością miejską, administracją publiczną oraz środowiskiem biznesowym. 
                        W Smart City stawiamy na rozwój i pogłębianie wiedzy w zakresie: zrównoważonego rozwoju miast; międzybranżowej 
                        współpracy w trakcie procesu projektowania urbanistycznego;   budownictwa pasywnego i innowacyjnych rozwiązań problemów energetycznych miast;   
                        zintegrowanych systemów transportowych; kreowania przestrzeni przyjaznych mieszkańcom i środowisku; informatyzacji zarządzania miastem.
                        </p>
                    </div>
                </GridItem>
                
                {/* <InfoArea
                    title="Opis koła"
                    description="Członkowie Smart City PW są studentami różnych wydziałów Politechniki Warszawskiej. 
                    Jesteśmy interdyscyplinarnym, rozwijającym się teamem, który chce wcielać w życie wizję inteligentnych miast. 
                    Uważamy, że nauka nie powinna zamykać się na uczelni, ale służyć każdemu człowiekowi, dlatego nasze projekty 
                    realizujemy m.in. we współpracy ze społecznością miejską, administracją publiczną oraz środowiskiem biznesowym. 
                    W Smart City stawiamy na rozwój i pogłębianie wiedzy w zakresie: zrównoważonego rozwoju miast; międzybranżowej 
                    współpracy w trakcie procesu projektowania urbanistycznego;   budownictwa pasywnego i innowacyjnych rozwiązań problemów energetycznych miast;   
                    zintegrowanych systemów transportowych; kreowania przestrzeni przyjaznych mieszkańcom i środowisku; informatyzacji zarządzania miastem."
                    icon=""
                /> */}

                <GridItem>
                    <h2>Nasza strona na fb</h2>
                    <FacebookPage></FacebookPage>
                </GridItem>

                <GridItem xs={7} sm={7} md={7}>
                    <h2>Nasi Partnerzy</h2>
                    <SectionCarousel></SectionCarousel>
                </GridItem>

            </GridContainer>
            <MyFooter classes={classes}/>
        </div>
        
      
    );
}
export default Index;
