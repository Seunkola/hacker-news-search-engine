import deepFreeze from 'deep-freeze';
import storyReducer from './story';

describe('story reducer', () => {
    it('adds stories to the story state', () => {
        const stories = ['a','b','c'];

        const actions = {
            type: 'STORIES_ADD',
            stories,
        };

        const previousState = { stories: [], error: null };
        const expectedNewState = { stories, error: null };

        deepFreeze(previousState);
        const newState = storyReducer(previousState, actions);

        expect(newState).toEqual(expectedNewState);
    });
});
