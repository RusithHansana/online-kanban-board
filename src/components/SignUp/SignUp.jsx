import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import './SignUp.scss';
import SignForm from './SignForm';

const SignUp = () => {
    const [isRegistered, setIsRegistered] = useState(true);
    const animation = useAnimation();

    useEffect(() => {
        animation.start({
            opacity: 0,
            x: 0,
        })
            .then(() => {
                animation.start({
                    opacity: 1,
                    x: -20,
                    transition: { duration: 0.85 }
                });
            });
    }, [isRegistered, animation]);



    const handleButton = () => {
        setIsRegistered(isRegistered => !isRegistered);
    }
    return (
        <div className="signup">
            <div className="welcome-text">
                <span><p>Hey there!</p></span>
                <br />
                <p>Tired of sticky notes everywhere?</p>
                <br />
                <p>Manage projects the easy way with our kanban boards.</p>
            </div>
            {
                <motion.div animate={animation} initial={{ opacity: 0, x: 0 }}>
                    <SignForm isRegistered={isRegistered} handleButton={handleButton} />
                </motion.div>
            }
        </div>
    );
}

export default SignUp;