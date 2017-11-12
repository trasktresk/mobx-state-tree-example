import List from 'Containers/Questions/List';
import Single from 'Containers/Questions/Single';


export default [
    {
        path: '/',
        component: List,
        exact: true
    },
    {
        path: '/questions/:id',
        component: Single
    },
];