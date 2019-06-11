import { combineReducers } from "redux";
import { reducer as formReducer} from "redux-form";
import authReaducer from  './authReducer';
import streamReducer from './streamReducer';

/**
 * Funcion de biblioteca redux, 
 * que crea los campos del reductor y sus valores
 */
export default combineReducers({
    auth: authReaducer,
    form: formReducer,
    streams: streamReducer
});