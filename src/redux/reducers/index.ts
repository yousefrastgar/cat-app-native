import {combineReducers} from 'redux';
import categories from "./categoryReducer";
import cats from "./catReducer";
import net from "./netReducer";

const rootReducer = combineReducers({
    categories,
    cats,
    net
})

export default rootReducer;
