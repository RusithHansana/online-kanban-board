import {React, useState} from "react";

import './BoardItem.scss';

const BoardItem = ({item, onItemClick}) => {
    const [isHovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const hoverStyles = {
        background: isHovered ? `var(${item.color})` : 'inherit',
        color: isHovered ? 'var(--secondary-color)' : 'inherit',
        borderRadius: isHovered ? '10px' : 'inherit',
        padding: isHovered ? '1rem' : 'inherit',

    };

    return (
        <div className="board-items" style={{borderLeft: `4px solid var(${item.color})`}}>
            <button>
                <li
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={hoverStyles}
                >
                    {item.name}
                </li>
            </button>
        </div>
    );
}

export default BoardItem;