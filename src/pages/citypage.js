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
                        <StatefulCityModal title="fotowoltaika" buttonText="panele fotowoltaiczne">
                            <p> 
                                Dzień dobry,
                                czy są Państwo zainteresowani instalacją paneli fotowoltaiczych?
                            </p>
                        </StatefulCityModal>
                    </div>

                    <div className='transport'>
                        <StatefulCityModal title="transport" buttonText="pociąg">
                            <p>
                                Przedstawimy teraz PLAN NA NAPRAWĘ POLSKIEJ KOLEI
                            </p>
                        </StatefulCityModal>
                    </div>

                    <div className='dron'>
                        <StatefulCityModal title="dron" buttonText="dron">
                            <p>
                                PTAKI VS DRONY 
                            </p>
                        </StatefulCityModal>
                    </div>
                </div>
        </div>
        // </div>
    ); 
}

export default CityPage;
