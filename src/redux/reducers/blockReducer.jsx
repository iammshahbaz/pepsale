import { ADD_BLOCK, MOVE_BLOCK, SET_BLOCKS } from '../actions/blockActions';

const initialState = {
    blocks: [],
};

const blockReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BLOCKS:
            return {
                ...state,
                blocks: action.payload,
            };
        case ADD_BLOCK:
            return {
                ...state,
                blocks: [...state.blocks, action.payload],
            };
        case MOVE_BLOCK:
            return {
                ...state,
                blocks: state.blocks.map((block) =>
                    block.id === action.payload.blockId
                        ? { ...block, laneId: action.payload.newLaneId }
                        : block
                ),
            };
        default:
            return state;
    }
};

export default blockReducer;
