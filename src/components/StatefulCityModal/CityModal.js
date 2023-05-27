// https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a

import React from "react";

const CityModal = props => {

    return (
        <div className={`modal ${props.show ? 'show' : ''}`}>
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="close-button"> Zamknij </button>
                </div>
            </div>
        </div>
    )
}

export default CityModal