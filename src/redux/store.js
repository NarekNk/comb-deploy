import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import forecastReducer from './forecastReducer';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(forecastReducer,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;