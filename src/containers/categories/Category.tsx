import React from "react";
import styled from "styled-components";
import CategoryModel from "./CategoryModel";
import {connect, RootStateOrAny} from "react-redux";
import {filterCats} from "../../redux/actions/catActions";

const ListItem = styled.li`
    margin: 1.5rem 0;
`;

const StyledCheckbox = styled.input`
    position: absolute;
    opacity: 0;
    z-index: 3;
    cursor: pointer;
    width: 80%;
    height: 24px;
    margin: 0;
    padding: 0;
`;

const CheckBoxLabel = styled.label`
    position: relative;
    cursor: pointer;
    padding: 0;
    &:before {
        content: "";
        margin-right: 10px;
        display: inline-block;
        vertical-align: text-top;
        width: 20px;
        height: 20px;
        background: #FFFFFF;
        border: 1px solid #000000;
    }
    ${StyledCheckbox}:checked + &:before {
        background: #d35400;
    }
    ${StyledCheckbox}:checked + &:after {
        content: "";
        position: absolute;
        left: 5px;
        top: 9px;
        background: white;
        width: 2px;
        height: 2px;
        box-shadow: 2px 0 0 white, 4px 0 0 white, 4px -2px 0 white, 4px -4px 0 white, 4px -6px 0 white, 4px -8px 0 white;
        transform: rotate(45deg);
    }
`;

const Category = (
    {category, categoryIds, dispatch}: { category: CategoryModel, categoryIds: Array<number>, dispatch: Function }
) => {
    const onSelected = (event: any, categoryId: number) => {
        let filters = [...categoryIds];
        const index = filters.indexOf(categoryId);
        if (event.target.checked) {
            if (index === -1)
                filters.push(categoryId);
        } else {
            if (index > -1)
                filters.splice(index, 1);
        }
        dispatch(filterCats(filters));
    }

    return (
        <ListItem>
            <StyledCheckbox type="checkbox" value={category.id} onChange={event => onSelected(event, category.id)}/>
            <CheckBoxLabel>{category.name}</CheckBoxLabel>
        </ListItem>
    );
}

const mapStateToProps = (state: RootStateOrAny) => ({
    categoryIds: state.cats.categoryIds
});

export default connect(mapStateToProps)(Category);
