import React from "react";
import Layout from "../layout";
import Button from "../components/Button";
import {Link} from "react-router-dom";
import styled from "styled-components";

const CenteredDiv = styled.div`
    text-align: center;
    margin: 15rem 0 0;
    height: 40vh;
`;

const NotFound = () => {
    return (
        <Layout hideHeader>
            <CenteredDiv>
                <h1>Page Not Found!</h1>
                <Link to="/">
                    <Button title="Back to home" onClick={null}/>
                </Link>
            </CenteredDiv>
        </Layout>
    );
}

export default NotFound;
