import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import Container from 'Components/Container';
import Card from './components/Card';


const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const questions = [
    {
        id: 1,
        question: 'Вы любите клубнику?',
    },
    {
        id: 2,
        question: 'Вы любите малину?',
    },
    {
        id: 3,
        question: 'Вам уже исполнилось 18 лет?',
    },
];

@inject("store")
@observer
export default class List extends React.Component {
    render() {
        return (
            <Container>
                <Cards>
                    {questions.map(item => <Card key={item.id} {...item} />)}
                </Cards>
            </Container>
        );
    }
}