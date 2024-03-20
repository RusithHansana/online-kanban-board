import React, { useState } from 'react'
import { Menu, XSquare } from 'react-feather';
import { motion } from 'framer-motion';

import './Sidemenu.scss';

const Sidemenu = ({ Boards, setActiveId }) => {
    const [toggle, setToggle] = useState(false);

    const handleClick = (id) => {
        setActiveId(id);
        setToggle(false);
    }

    return (
        <div className="app__sidebar-menu">
            <Menu onClick={() => setToggle(true)} />
            {
                toggle ? (
                    <motion.div
                        whileInView={{ x: [-10, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <XSquare onClick={() => setToggle(false)} />
                        <h1 className="app__sidebar-menu title">Your Boards</h1>
                        <ul className="boards">
                            {
                                Boards.length !== 0 ? (
                                    Boards.map(board => {
                                        return (
                                            <li
                                                key={board._id}
                                                style={{ borderLeft: `4px solid var(${board.color})` }}
                                                onClick={() => handleClick(board._id)}
                                            >
                                                {board.boardName}
                                            </li>
                                        )
                                    }
                                    )
                                ) : <p>You don't have any projects yet...</p>
                            }
                        </ul>
                    </motion.div>
                ) : null
            }
        </div >
    )
}

export default Sidemenu