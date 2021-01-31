import {combineReducers} from 'redux';
import categories from "./categoryReducer";
import cats from "./catReducer";
import sidebar from "./sidebarReducer";

const rootReducer = combineReducers({
    categories,
    cats,
    sidebar
})

export default rootReducer;
