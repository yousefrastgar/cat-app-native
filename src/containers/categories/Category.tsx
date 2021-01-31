import React, {useState} from "react";
import CategoryModel from "./CategoryModel";
import {connect, RootStateOrAny} from "react-redux";
import {filterCats} from "../../redux/actions/catActions";
import CheckBox from '@react-native-community/checkbox';
import {Text, TouchableOpacity} from "react-native";
import {styles} from "../../assets/Styles";

const Category = (
    {category, categoryIds, dispatch}: { category: CategoryModel, categoryIds: Array<number>, dispatch: Function }
) => {
    const [isSelected, setIsSelected] = useState(false);

    const onSelected = (newValue) => {
        setIsSelected(newValue);
        let filters = [...categoryIds];
        const index = filters.indexOf(category.id);
        if (newValue) {
            if (index === -1)
                filters.push(category.id);
        } else {
            if (index > -1)
                filters.splice(index, 1);
        }
        dispatch(filterCats(filters));
    }

    return (
        <TouchableOpacity
            onPress={() => onSelected(!isSelected)}
            style={[styles.row, styles.flexWrap, styles.alignItemsCenter, styles.mb1]}
        >
            <CheckBox value={isSelected} onValueChange={newValue => onSelected(newValue)} onFillColor="#d35400"
                      tintColors={{true: "#d35400"}}/>
            <Text style={[styles.blackText, styles.fontSize22, styles.fontFamily]}>{category.name}</Text>
        </TouchableOpacity>
    );
}

const mapStateToProps = (state: RootStateOrAny) => ({
    categoryIds: state.cats.categoryIds
});

export default connect(mapStateToProps)(Category);
