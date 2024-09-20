import React from 'react';
import './Block.css';

const Block = ({ block, onDragStart, onClick }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', block.id);
        onDragStart(block.id);
    };

    return (
        <div
            className="block"
            draggable
            onDragStart={handleDragStart}
            onClick={() => onClick(block.id)}
        >
            {block.title}
        </div>
    );
};

export default Block;
