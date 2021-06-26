import {createStore} from 'redux';
import displayReducer from '../Reducers/displayReducer';

const initialState = {
    ID: 0
}

const store = createStore(displayReducer, initialState);

export default store;    