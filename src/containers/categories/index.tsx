import React, {useEffect} from "react";
import {connect, RootStateOrAny} from "react-redux";
import Category from "./Category";
import CategoryModel from "./CategoryModel";
import Loading from "../../components/Loading";
import {fetchCategories} from "../../redux/actions/categoryActions";
import Alert from "../../components/Alert";
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Button, FlatList, SafeAreaView, Text, View} from "react-native";
import {styles} from "../../assets/Styles";
import Icon from "react-native-vector-icons/Feather";

const Categories = (
    {
        navigation,
        dispatch,
        categories,
        loading,
        error
    }: { navigation: any, dispatch: Function, categories: [], loading: boolean, error: Error }
) => {
    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    return (
        <DrawerContentScrollView>
            <View style={[styles.row, styles.flexWrap, styles.alignItemsCenter, styles.py4, styles.pl2, styles.mb1]}>
                <Icon name="filter" size={26} color="#d35400"/>
                <Text style={[styles.boldFontFamily, styles.fontSize22, styles.pl2]}>Filter By Categories</Text>
            </View>
            <SafeAreaView style={styles.flex1}>
                <FlatList
                    data={categories}
                    renderItem={({item}: { item: CategoryModel }) => (<Category key={item.id} category={item}/>)}
                    keyExtractor={(item: any) => item.id.toString()}
                    ListEmptyComponent={
                        loading ?
                            <Loading/>
                            :
                            <Alert text={error ? String(error) : "There is no data to display."}/>
                    }
                    contentContainerStyle={styles.pl6}
                />
            </SafeAreaView>
            <View style={styles.mt4}>
                <Button title="Close" color="#d35400" onPress={() => navigation.closeDrawer()}/>
            </View>
        </DrawerContentScrollView>
    );
}

const mapStateToProps = (state: RootStateOrAny) => ({
    categories: state.categories.categories,
    loading: state.categories.loading,
    error: state.categories.error
});

export default connect(mapStateToProps)(Categories);
