//import Modal from '@mui/base/Modal';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import StatefulCityModal from '../components/StatefulCityModal/StatefulCityModal';
import backgroundImage from '../citypage-background.png';
import MyFooter from "../components/footer.js";
import { makeStyles } from "@material-ui/core/styles";
import errorPageStyle from "../assets/jss/material-kit-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(errorPageStyle);

function CityPage() {
    const [show, setShow] = useState(false) // czy potrzebne ? 
    const classes = useStyles();
    const {imgWidth, imgHeight} = useImageSize();
    console.log(`${imgWidth}, ${imgHeight}`)
    return (
        <div className="App">
            <Header /> 
            <div className='container'>
                {/* <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>  */}
                        {/* <h1> CityPage </h1> */}

                <img className="background-image" src={backgroundImage}></img>        
                        <div className='Energia' style={{position: 'absolute', top:`${0.21*imgHeight}px`, left:`${0.21*imgWidth}px`}}>
                            <StatefulCityModal title="Energia w mieście" >
                                <p> 
                                    <h3> Nasz projekt: Fotowoltaika </h3>
                                    <text> Projekt Fotowoltaika ma na celu stworzenie narzędzia umożliwiającego ocenę możliwości umieszczenia paneli słonecznych na dachach wybranych budynków komunalnych przyczyniając się do szerzenia idei pozyskiwania energii z OZE (odnawialnych źródeł energii) w miastach.  Zespół pracuje nad stworzeniem interfejsu, który będzie wykonywał analizy dla wybranych obszarów Warszawy z wykorzystaniem danych open source.
                                Więcej o projekcie: https://github.com/FotowoltaikaSC/solar-estimator </text>
                                </p>
                            </StatefulCityModal>
                        {/* </div> */}

                        {/* <div className='hydroponika'>
                            <StatefulCityModal title="hydroponika" >
                                <p> 
                                    Dzień dobry,
                                    czy są Państwo zainteresowani instalacją paneli fotowoltaiczych?
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='waste-manage'>
                            <StatefulCityModal title="waste-manage" >
                                <p> 
                                    Dzień dobry,
                                    czy są Państwo zainteresowani instalacją paneli fotowoltaiczych?
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='ogrod'>
                            <StatefulCityModal title="ogrod" >
                                <p> 
                                    Dzień dobry,
                                    czy są Państwo zainteresowani instalacją paneli fotowoltaiczych?
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='szkola'>
                            <StatefulCityModal title="szkola" >
                                <p> 
                                    Dzień dobry,
                                    czy są Państwo zainteresowani instalacją paneli fotowoltaiczych?
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='wiezowiec'>
                            <StatefulCityModal title="wiezowiec" >
                                <p> 
                                    Dzień dobry,
                                    czy są Państwo zainteresowani instalacją paneli fotowoltaiczych?
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='metro'>
                            <StatefulCityModal title="metro" >
                                <p>
                                    Przedstawimy teraz PLAN NA NAPRAWĘ POLSKIEJ KOLEI
                                </p>
                            </StatefulCityModal>
                        </div>

                        <div className='samolot'>
                            <StatefulCityModal title="samolot" >
                                <p>
                                    PTAKI VS DRONY 
                                </p>
                            </StatefulCityModal>
                        </div>

                        
                        <div className='parking'>
                            <StatefulCityModal title="parking" >
                                <p> 
                                    Dzień dobry,
                                    czy są Państwo zainteresowani instalacją paneli fotowoltaiczych?
                                </p>
                            </StatefulCityModal>
                        </div> */}

                        
                        </div>
                    {/* <MyFooter classes={classes}/> */}
            </div>
        </div>
    ); 
}

function useImageSize() {
    const [imageSize, setImageSize] = useState({
        imgWidth: undefined,
        imgHeight: undefined,
    });
    const image = document.querySelector('.background-image')
    useEffect(() => {
        const image = document.querySelector('.background-image')
        function handleResize() {
            setImageSize({
                imgWidth: image.clientWidth,
                imgHeight: image.clientHeight,
            });
        }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, ); 
    return imageSize;
  }

export default CityPage;
