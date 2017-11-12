import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  height: 36px;
  min-width: 90px;
  padding: 4px 32px;
  margin-right: 24px;
  background-color: ${props => props.color === 'success' ? '#28a745' : props.color === 'danger' ? '#dc3545' : '#868e96'};
  color: #ffffff;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
`;

export default (props) => {
    return <Button {...props}>{props.children}</Button>
};