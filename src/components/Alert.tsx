import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
    background: #d35400;
    color: #FFFFFF;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
`;

const Alert = ({text}: { text: string }) => {
    return (
        <Paragraph>{text}</Paragraph>
    );
}

export default Alert;
