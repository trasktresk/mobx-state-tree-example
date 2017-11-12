import { types, getParent, flow } from 'mobx-state-tree'

export default types
    .model('Question', {
        id: types.identifier(),
        text: types.string,
        answer: ''
    })
    .actions(self => ({
        updateAnswer(answer) {
            self.answer = answer;
        }
    }));