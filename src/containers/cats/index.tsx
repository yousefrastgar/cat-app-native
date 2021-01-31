import React, {useEffect} from "react";
import {connect, RootStateOrAny} from "react-redux";
import {fetchCats, loadMore} from "../../redux/actions/catActions";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import styled from "styled-components";
import CatModel from "./CatModel";
import Cat from "./Cat";
import Alert from "../../components/Alert";
import Flex from "../../components/Flex";

const CatsDiv = styled.div`
    width: 75%;
    display: inline-block;
    text-align: center;
    vertical-align: top;
    @media (max-width: 991px) {
        & {
            width: 100%;
        }
    }
`;

const Cats = (
    {dispatch, page, limit, showMore, cats, categoryIds, loading, error}
        : { dispatch: Function, page: number, limit: number, showMore: boolean, cats: [], categoryIds: Array<number>, loading: boolean, error: Error }
) => {
    useEffect(() => {
        dispatch(fetchCats(limit, page, categoryIds));
    }, [limit, page, categoryIds]);

    const loadMoreCats = () => {
        dispatch(loadMore());
    }

    return (
        <CatsDiv>
            <Flex style={{justifyContent: "center", flexWrap: "wrap"}}>
                {cats?.length ?
                    cats.map((cat: CatModel) => {
                        return (
                            <Cat key={cat.id} cat={cat}/>
                        );
                    })
                    :
                    !loading && <Alert text={error ? String(error) : "There is no data to display."}/>
                }
            </Flex>
            {loading && <Loading/>}
            {showMore && <Button title="Load More" onClick={loadMoreCats} style={{marginTop: "3rem"}}/>}
        </CatsDiv>
    );
}

const mapStateToProps = (state: RootStateOrAny) => ({
    limit: state.cats.limit,
    page: state.cats.page,
    showMore: state.cats.showMore,
    cats: state.cats.cats,
    loading: state.cats.loading,
    error: state.cats.error,
    categoryIds: state.cats.categoryIds
});

export default connect(mapStateToProps)(Cats);
