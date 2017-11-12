import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import Container from 'Components/Container';
import Card from './components/Card';


const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

@inject("store")
@observer
export default class List extends React.Component {
    render() {
        const { questions } = this.props.store;
        return (
            <Container>
                <Cards>
                    {questions.map(item => <Card key={item.id} {...item} />)}
                </Cards>
            </Container>
        );
    }
}