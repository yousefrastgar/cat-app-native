import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    color: #FFFFFF;
    text-align: center;
    padding: 15px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 4px;
    background: #d35400;
    border: none;
    transition: all 0.5s;
`;

const StyledButtonContent = styled.span`
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
    &:after {
        content: '»';
        position: absolute;
        opacity: 0;
        top: 0;
        right: -20px;
        transition: 0.5s;
    }
    ${StyledButton}:hover & {
        padding-right: 25px;
    }
    ${StyledButton}:hover &:after {
        opacity: 1;
        right: 0;
    }
`;

const Button = ({title, onClick, style = {}}: { title: string, onClick: any, style?: object }) => {
    return (
        <StyledButton className="button-two" onClick={onClick} style={style}>
            <StyledButtonContent>{title}</StyledButtonContent>
        </StyledButton>
    );
}

export default Button;
