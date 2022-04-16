import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Forecast from './components/Forecast/Forecast';
import Search from './components/Search/Search';
import store from './redux/store';


const App = () => {
  return <Provider store={store}>
    <Search></Search>
    <Forecast />
  </Provider>
}


export default App;