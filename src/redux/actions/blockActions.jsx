export const ADD_BLOCK = 'ADD_BLOCK';
export const MOVE_BLOCK = 'MOVE_BLOCK';
export const SET_BLOCKS = 'SET_BLOCKS';

export const addBlock = (block) => ({
    type: ADD_BLOCK,
    payload: block,
});

export const moveBlock = (blockId, newLaneId) => ({
    type: MOVE_BLOCK,
    payload: { blockId, newLaneId },
});

export const setBlocks = (blocks) => ({
    type: SET_BLOCKS,
    payload: blocks,
});
