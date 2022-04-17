import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import currentReducer from './currentReducer';
import exchangeReducer from './exchangeReducer';
import forecastReducer from './forecastReducer';

const reducers = combineReducers({forecastReducer, currentReducer, exchangeReducer});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;