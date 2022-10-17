import { createStore, applyMiddleware } from 'redux';
import update from './reducer';
import thunk from 'redux-thunk';


const store = createStore(update,applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;