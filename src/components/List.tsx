import React from "react";
import styled from "styled-components";

const List = ({noPadding = false, children}: { noPadding?: boolean, children: React.ReactNode }) => {
    const Ul = styled.ul`
        margin: 0;
        ${noPadding ? "padding: 0;" : ''}
        list-style: none;
        position: relative;
    `;

    return (
        <Ul>{children}</Ul>
    );
}

export default List;
