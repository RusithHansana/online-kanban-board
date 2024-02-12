import React from 'react';

import './Modal.scss';
import { X } from 'react-feather';

const Modal = ({ toggle, title }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{title}</h2>
                <X className="close-modal" onClick={() => toggle()} />

            </div>
        </div>
    )
}

export default Modal;