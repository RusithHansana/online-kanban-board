import React, { useState } from 'react'
import { Menu, XSquare } from 'react-feather';
import { motion } from 'framer-motion';

import './Sidemenu.scss';

const Sidemenu = ({boards}) => {
    const [toggle, setToggle ] = useState(false);    
    return (
        <div className="app__sidebar-menu">
            <Menu onClick={ () => setToggle(true) }/>
            {
                toggle?(
                    <motion.div
                        whileInView={ { x: [ -10, 0 ]} }
                        transition={ { duration: 0.85, ease: 'easeOut'} }
                        >
                            <XSquare onClick={ () => setToggle(false) }/>
                            <h1 className="app__sidebar-menu title">Your Boards</h1>
                            <ul className="boards">
                                {
                                    boards.map(item => (
                                        <li key={item.id} style={{borderLeft: `4px solid var(${item.color})`}}>
                                            {item.name}
                                        </li>
                                    ))
                                }
                            </ul> 
                    </motion.div>
                ):null
            }
        </div>
    )
}

export default Sidemenu