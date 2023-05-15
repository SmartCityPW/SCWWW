//import Modal from '@mui/base/Modal';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Header from '../components/header';
import StatefulCityModal from '../components/StatefulCityModal/StatefulCityModal';
import backgroundImage from '../citypage-background-1ver.png';

function CityPage() {
    const [show, setShow] = useState(false) // czy potrzebne ? 

    return (
        // <div className="App">
        <div className='container'>
            <Header />

            <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}> 
                    <h1>
                        CityPage
                    </h1>

                    <div className='fotowoltaika'>
                        <StatefulCityModal title="fotowoltaika" >
                            <p> 
                                Dzień dobry,
                                czy są Państwo zainteresowani instalacją paneli fotowoltaiczych?
                            </p>
                        </StatefulCityModal>
                    </div>

                    <div className='hydroponika'>
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
                    </div>

                    
                </div>
        </div>
        // </div>
    ); 
}

export default CityPage;
