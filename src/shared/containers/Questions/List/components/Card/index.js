import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Card = styled.div`
  width: calc(25% - 32px);
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

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: #007bff;
  padding: 0 16px;
  color: #ffffff;
  line-height: 36px;
  border-radius: 2px;
  text-decoration: none;
`;

export default ({ question, id }) => {
    return (
        <Card>
            <Question>{question}</Question>
            <ButtonBox>
                <StyledLink to={`/questions/${id}`}>Ответить</StyledLink>
            </ButtonBox>
        </Card>
    );
};