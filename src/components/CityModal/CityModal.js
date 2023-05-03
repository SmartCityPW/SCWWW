// import Modal from 'react-bootstrap/Modal';
// import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
// import React, { useState } from 'react';
// import Header from './header';

// function CityModal() {
//     const [open, setOpen] = useState(false);
//     const handleClose = () => setOpen(false);
//     const handleOpen = () => setOpen(true);

//     return (
//         <>
//         <Button onClick={handleOpen}>panele fotowoltaiczne</Button>
//         <Modal
//             open={open}
//             onHide={handleClose}
//                 backdrop="static"
//         >
//                 <Modal.Header closeButton>
//                     <Modal.Title>Fotowoltaika</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     Dzień dobry, czy byliby Państwo zainteresowani instalacją paneli fotowoltaicznych? 
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>Zamknij</Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     ); 
// }

// ver 2 

//     <Button onClick={handleOpen}>Open modal</Button>
//     <Modal
//     open={open}
//     onClose={handleClose}
//     aria-labelledby="modal-modal-title"
//     aria-describedby="modal-modal-description"
//     >
//     <Box sx={style}>
//         <Typography id="modal-modal-title" variant="h6" component="h2">
//         Text in a modal
//         </Typography>
//         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//         Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//         </Typography>
//     </Box>
//     </Modal>

// export default CityModal;

import React from "react";

const CityModal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className="modal">
            <div className="modal-content">
                {/* <button>Modal</button> */}
                <div className="modal-header">
                    <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">
                    Modal content 
                </div>
                <div className="modal-footer">
                    <button onClick={props.onClose} className="close-button">Close</button>
                </div>
            </div>
        </div>
    )
}

export default CityModal