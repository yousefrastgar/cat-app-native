import React from "react";
import styled from "styled-components";

const FlexDiv = styled.div`
    display: flex;
`;

const Flex = ({children, style = {}}: { children: React.ReactNode, style?: object }) => {
    return (
        <FlexDiv style={style}>{children}</FlexDiv>
    );
}

export default Flex;
