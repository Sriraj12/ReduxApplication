import { createStore, applyMiddleware } from 'redux';
import update from './reducer';
import thunk from 'redux-thunk';


const store = createStore(update,applyMiddleware(thunk))

export default store;