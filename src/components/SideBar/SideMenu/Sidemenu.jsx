import React, { useState } from 'react'
import { Menu, XSquare } from 'react-feather';
import { motion } from 'framer-motion';

import './Sidemenu.scss';
import { Boards } from '../../../utils/BoardData/Boards';

const Sidemenu = ({ BoardIds, setActiveId }) => {
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
                                BoardIds.length !== 0 ? (
                                    BoardIds.map(boardId => {
                                        const item = Boards[boardId];
                                        return (
                                            <li
                                                key={item.id}
                                                style={{ borderLeft: `4px solid var(${item.color})` }}
                                                onClick={() => handleClick(item.id)}
                                            >
                                                {item.name}
                                            </li>
                                        )
                                    }
                                    )
                                ) : null
                            }
                        </ul>
                    </motion.div>
                ) : null
            }
        </div>
    )
}

export default Sidemenu