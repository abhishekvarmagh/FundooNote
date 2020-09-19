import { combineReducers } from "redux";
import DrawerReducer from './DrawerReducer';
import ApiReducer from './ApiReducer'

const RootReducer = combineReducers({
    drawer: DrawerReducer,
    api: ApiReducer
})

export default RootReducer;