import { types } from 'mobx-state-tree';
import Question from './Question';


export const Store = types
    .model('QuestionStore', {
        questions: types.array(Question)
    })
    .views(self => ({
        getQuestionById(id) {
            return self.questions.find(item => item.id === id);
        }
    }))
    .actions(self => ({
        updateQuestionList(questions) {
            return self.questions = questions;
        }
    }));

const store = Store.create({
    questions: [{
            id: '1',
            text: 'Вы любите клубнику?',
        }, {
            id: '2',
            text: 'Вы любите малину?',
        }, {
            id: '3',
            text: 'Вам уже исполнилось 18 лет?',
        }]
});

export default store;