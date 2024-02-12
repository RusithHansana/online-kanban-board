import React, { useState } from 'react';
import { X } from 'react-feather';

import './Modal.scss';

const Modal = ({ toggle, title }) => {
    const [selected, setSelected] = useState(0);

    const colors = [
        "--highlight-green",
        "--highlight-cyan",
        "--highlight-pink",
        "--highlight-purple",
        "--highlight-blue"
    ]

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>{title}</h2>
                <X className="close-modal" onClick={() => toggle()} />
                <div className="modal-form">
                    {
                        title === "Create Project" ?
                            (
                                <>
                                    <label>Project Name</label>
                                    <input type="text" />
                                    <label>Select a color</label>
                                    <div className="form-colorpick">
                                        {
                                            colors.map((color, index) =>
                                                <button
                                                    key={index}
                                                    style={{ background: `var(${color})`, opacity: selected === index ? `1` : `0.4`, border: selected === index ? `2px solid white` : null }}
                                                    onClick={() => setSelected(index)}
                                                />)
                                        }
                                    </div>
                                </>
                            ) : (
                                <>
                                    <label>Task</label>
                                    <input type="text" />
                                </>
                            )
                    }
                </div>
                <div className="form-end">
                    <button className="form-submit">{title === "Create Project" ? "Create" : "Add"}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;