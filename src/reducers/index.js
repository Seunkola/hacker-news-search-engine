import { combineReducers } from 'redux';
import storyReducer from '../reducers/story';
import archiveReducer from '../reducers/archive';

const rootReducer = combineReducers({
    storyState: storyReducer,
    archiveState: archiveReducer,
});

export default rootReducer;
