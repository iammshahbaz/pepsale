import { createStore, combineReducers } from 'redux';
import blockReducer from './reducers/blockReducer';

const rootReducer = combineReducers({
    block: blockReducer,
});

const store = createStore(rootReducer);

export default store;
