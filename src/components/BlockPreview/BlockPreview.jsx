import React from 'react';
import './BlockPreview.css';

const BlockPreview = ({ block, onClose }) => {
    return (
        <div className="block-preview">
            <button className="close-btn" onClick={onClose}>X</button>
            <h2>{block.title}</h2>
            <p>{block.description}</p>
            <h3>Transition History</h3>
            <ul>
                {block.history.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default BlockPreview;
