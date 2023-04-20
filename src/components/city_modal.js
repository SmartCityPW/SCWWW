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

// export default CityModal;