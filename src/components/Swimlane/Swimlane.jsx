import React from 'react';
import Block from '../Block/Block';
import './Swimlane.css';

const Swimlane = ({ lane, onDragOver, onDrop, onBlockClick }) => {
    return (
        <div
            className="swimlane"
            onDragOver={onDragOver}
            onDrop={(e) => onDrop(e, lane.id)}
        >
            <h2>{lane.title}</h2>
            {lane.blocks.map((block) => (
                <Block
                    key={block.id}
                    block={block}
                    onDragStart={() => {}}
                    onClick={onBlockClick}
                />
            ))}
        </div>
    );
};

export default Swimlane;
