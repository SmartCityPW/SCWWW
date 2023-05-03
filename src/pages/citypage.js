//import Modal from '@mui/base/Modal';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Header from '../components/header';
import CityModal from '../components/CityModal/CityModal';

function CityPage() {
    const [show, setShow] = useState(false)

    return (
        <div className="App">
            <Header />
            <h1>
                CityPage
            </h1>

            <div className='fotowoltaika'>
                <button onClick={() => setShow(true)}>panele fotowoltaiczne</button>
                <CityModal title="Fotowoltaika" onClose={() => setShow(false)} show={show}>
                    <p> Dzień dobry,
                        czy są Państwo zainteresowani instalacją paneli fotowoltaiczych?
                    </p>
                </CityModal>
            </div>

            {/* <div className='kolej'>
                <button onClick={() => setShow(true)}>pociąg</button>
                <CityModal title="Transport" onClose={() => setShow(false)} show={show}>
                    <p>
                        Przedstawimy teraz PLAN NA NAPRAWĘ POLSKIEJ KOLEI
                    </p>
                </CityModal>
            </div> */}
        </div>
    ); 
}

export default CityPage;

// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const overlay = document.getElementById('overlay')

// openModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
//     })
// })

// closeModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
// })

// overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })

// function openModal(modal) {
//     if (modal == null) return
//     modal.classList.add('active')
//     overlay.classList.add('active')
// }

// function closeModal(modal) {
//     if (modal == null) return
//     modal.classList.remove('active')
//     overlay.classList.remove('active')
// }

