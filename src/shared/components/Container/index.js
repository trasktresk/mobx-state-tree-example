import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

export default class extends React.Component {
    render() {
        return (
            <Container>{this.props.children}</Container>
        );
    };
}