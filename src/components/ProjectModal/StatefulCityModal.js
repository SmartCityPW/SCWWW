import React, { useState } from "react";
import CityModal from "./CityModal";

const StatefulCityModal = props => {
    const [show, setShow] = useState(false);

    const toggleModal = () => {
        setShow(!show);
    }

    return (
        <>
            <button class="button-project" onClick={toggleModal}></button>
            <CityModal show={show} onClose={toggleModal} title={props.title}>
                {props.children}
            </CityModal>
        </>
    )
}

export default StatefulCityModal;