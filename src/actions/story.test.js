import { doAddStories } from './story';

describe(' action creator', () => {
    it('adds stories', () => {
        const stories = [
            {objectID: 1, title: 'test'},
        ];

        const expectedAction = {
            type: 'STORIES_ADD',
            stories
        };

        const action = doAddStories(stories);

        expect(action).toEqual(expectedAction);
    });
});