import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useAddBoardsMutation } from "../../slices/boardsApiSlice.js";

import { X } from 'react-feather';



import './Modal.scss';

const Projectmodal = ({ toggle, userId }) => {
    const [selected, setSelected] = useState(0);
    const [boardName, setBoardName] = useState("");

    const [addBoards] = useAddBoardsMutation();

    const colors = [
        "--highlight-green",
        "--highlight-cyan",
        "--highlight-pink",
        "--highlight-purple",
        "--highlight-blue"
    ]



    const handleInputChange = (e) => {
        setBoardName(e.target.value);
    }

    const handleAddProjectButton = async () => {
        if (!boardName) {
            toast.error("Please enter project name");
            return;
        }
        try {
            const response = await addBoards({
                boardName,
                color: colors[selected],
                userId
            });
            toast.success("Project added successfully");
            toggle();
        } catch (error) {
            toast.error("Failed to add project");
        }
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Create A Project</h2>
                <X className="close-modal" onClick={() => toggle()} />
                <div className="modal-form">

                    <label>Project Name</label>
                    <input type="text" onChange={handleInputChange} />
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

                </div>
                <div className="form-end">
                    <button className="form-submit" onClick={handleAddProjectButton}>Create</button>
                </div>
            </div>
        </div>
    )
}

export default Projectmodal;