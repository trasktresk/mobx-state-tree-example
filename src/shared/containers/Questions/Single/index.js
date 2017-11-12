import React from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';

import Container from 'Components/Container';
import Button from 'Components/Button';


const Card = styled.div`
  margin-right: 32px;
`;

const Question = styled.div`
  border: 1px solid  #e2e2e2;
  border-bottom: 0;
  border-radius: 2px 2px 0 0;
  text-align: center;
  padding: 36px 18px;
`;

const ButtonBox = styled.div`
  padding: 16px;
  background-color: #e2e2e2;
  text-align: center;
`;

@inject('store')
@observer
export default class extends React.Component {
    render() {
        const { id } = this.props.match.params;
        const question = this.props.store.getQuestionById(id);

        return (
            <Container>
                <Card>
                    <Question>{question.text}</Question>
                    {
                        !question.answer ?
                            <ButtonBox>
                                <Button color="success" onClick={() => question.updateAnswer('ДА')}>ДА</Button>
                                <Button color="danger" onClick={() => question.updateAnswer('НЕТ')}>НЕТ</Button>
                            </ButtonBox>
                            : <ButtonBox>{`Вы ответили ${question.answer}`}</ButtonBox>
                    }

                </Card>
            </Container>
        );
    };
};