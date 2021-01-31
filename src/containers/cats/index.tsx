import React, {useEffect} from "react";
import {connect, RootStateOrAny} from "react-redux";
import {fetchCats, loadMore} from "../../redux/actions/catActions";
import Loading from "../../components/Loading";
import CatModel from "./CatModel";
import Cat from "./Cat";
import Alert from "../../components/Alert";
import {FlatList, SafeAreaView} from "react-native";
import {styles} from "../../assets/Styles";

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
        <SafeAreaView style={styles.flex1}>
            <FlatList
                data={cats}
                renderItem={({item}: { item: CatModel }) => (<Cat key={item.id} cat={item}/>)}
                keyExtractor={(item: any) => item.id.toString()}
                onEndReached={showMore ? loadMoreCats : null}
                ListEmptyComponent={
                    !loading ? <Alert text={error ? String(error) : "There is no data to display."}/> : null
                }
                contentContainerStyle={[styles.justifyContentCenter, styles.alignItemsCenter, styles.py8]}
            />
            {loading && <Loading/>}
        </SafeAreaView>
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
