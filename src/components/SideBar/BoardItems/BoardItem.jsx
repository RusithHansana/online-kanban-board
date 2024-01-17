import { React, useState } from "react";

import './BoardItem.scss';

const BoardItem = ({ item, isActive, setActiveId }) => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    let style = {
        background: `var(${item.color})`,
        color: 'var(--secondary-color)',
        borderRadius: '10px',
        padding: '1rem',
        scale: '1.1'

    };

    return (
        <div className="board-items" style={{ borderLeft: `4px solid var(${item.color})` }}>
            <button onClick={() => setActiveId(item.id)}>
                <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={isHovered || isActive ? style : null}
                >
                    {item.name}
                </li>
            </button>
        </div>
    );
}

export default BoardItem;