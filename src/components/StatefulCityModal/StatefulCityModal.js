import React, { useState } from "react";
import CityModal from "./CityModal";

const StatefulCityModal = props => {
    const [show, setShow] = useState(false);

    const toggleModal = () => {
        setShow(!show);
    }

    return (
        <>
            <button onClick={toggleModal}>{props.buttonText}</button>
            <CityModal show={show} onClose={toggleModal} title={props.title}>
                {props.children}
            </CityModal>
        </>
    )
}

export default StatefulCityModal;