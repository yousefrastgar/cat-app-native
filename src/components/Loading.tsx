import React from "react";
import styled, {keyframes} from "styled-components";

const LoadingDiv = styled.div`
    display: block;
    height: 200px;
    position: relative;
    letter-spacing: 0.5px;
`;

const Spinner = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const SmoothSpinner = styled.span`
    &:after {
        content: '';
        box-sizing: border-box;
        width: 40px;
        height: 40px;
        position: absolute;
        top: calc(50% - 20px);
        left: calc(50% - 20px);
        border-radius: 50%;
        border-top: 4px solid #d35400;
        border-left: 4px solid #d35400;
        border-right: 4px solid #d35400;
        animation: ${Spinner} .6s linear infinite;
    }`;

const Loading = () => {
    return (
        <LoadingDiv>
            <SmoothSpinner/>
        </LoadingDiv>
    );
}

export default Loading;
