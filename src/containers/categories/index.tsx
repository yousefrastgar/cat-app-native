import React, {useEffect} from "react";
import {connect, RootStateOrAny} from "react-redux";
import styled from "styled-components";
import Category from "./Category";
import CategoryModel from "./CategoryModel";
import Loading from "../../components/Loading";
import {fetchCategories} from "../../redux/actions/categoryActions";
import Alert from "../../components/Alert";
import List from "../../components/List";
import Sidebar from "../../components/sidebar";
import {toggleSidebar} from "../../redux/actions/sidebarActions";
import Button from "../../components/Button";

const CategoriesDiv = styled.div`
    width: 25%;
    border: 1px solid #dee2e6;
    display: inline-block;
    @media (max-width: 991px) {
        & {
            display: none;
        }
    }
`;

const CenteredDiv = styled.div`
    text-align: center;
    margin-top: 1.5rem;
`;

const Categories = (
    {dispatch, categories, loading, error}: { dispatch: Function, categories: [], loading: boolean, error: Error }
) => {
    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const renderCategories = () => {
        return (
            loading ?
                <Loading/>
                :
                categories?.length ?
                    <List>
                        {categories.map((category: CategoryModel) => {
                            return (
                                <Category key={category.id} category={category}/>
                            );
                        })}
                    </List>
                    :
                    <Alert text={error ? String(error) : "There is no data to display."}/>
        );
    }

    return (
        <>
            <Sidebar>
                <CenteredDiv>
                    <h2>Filter By Category</h2>
                </CenteredDiv>
                <hr/>
                {renderCategories()}
                <hr/>
                <CenteredDiv>
                    <Button title="Close" onClick={() => dispatch(toggleSidebar())}/>
                </CenteredDiv>
            </Sidebar>
            <CategoriesDiv>
                {renderCategories()}
            </CategoriesDiv>
        </>
    );
}

const mapStateToProps = (state: RootStateOrAny) => ({
    categories: state.categories.categories,
    loading: state.categories.loading,
    error: state.categories.error
});

export default connect(mapStateToProps)(Categories);
