import React from "react";
import styled from "styled-components";
import Layout from "../layout";
import {Helmet} from "react-helmet";
import Categories from "../containers/categories";
import Cats from "../containers/cats";
import Container from "../components/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFilter} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {toggleSidebar} from "../redux/actions/sidebarActions";

const HomeDiv = styled.div`
    margin: 3rem 0;
    padding: 3rem 0;
    position: relative;
`;

const FilterButton = styled.button`
    display: none;
    position: sticky;
    top: 0.5rem;
    left: 0.5rem;
    margin-bottom: 1rem;
    color: #FFFFFF;
    text-align: center;
    padding: 15px;
    cursor: pointer;
    font-size: 18px;
    border-radius: 4px;
    background: #d35400;
    border: none;
    @media (max-width: 991px) {
        & {
            position: sticky;
            display: block;  
        }
    }
`;

const Home = ({dispatch}: { dispatch: Function }) => {
    return (
        <Layout>
            <Helmet>
                <title>Cats Gallery App | Home</title>
            </Helmet>
            <HomeDiv id="home">
                <FilterButton onClick={() => dispatch(toggleSidebar())}>
                    <FontAwesomeIcon icon={faFilter}/> Filter
                </FilterButton>
                <Container>
                    <Categories/>
                    <Cats/>
                </Container>
            </HomeDiv>
        </Layout>
    );
}

export default connect(null)(Home);
