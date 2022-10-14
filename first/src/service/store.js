import { createStore } from 'redux';
import update from './reducer';

const store = createStore(update,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;