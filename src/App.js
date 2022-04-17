import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import Exchange from './components/Exchange/Exchange';
import Forecast from './components/Forecast/Forecast';
import Search from './components/Search/Search';
import Tenzies from './components/Tenzies/Tenzies';
import currentReducer from './redux/currentReducer';
import store from './redux/store';


const App = () => {
  return <Provider store={store}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Search />
      <Routes>
        <Route path='/' element={<Dummy />} />
        <Route path='/tenzies' element={<Tenzies />} />
        <Route path='/exchange' element={<Exchange />} />
        <Route path='/weather/:query' element={<CurrentWeather />} />

      </Routes>
    </HashRouter>
  </Provider>
}

const Dummy = () => {
  const s = {
      textAlign: "center",
      marginTop: "20px"
  }

  return (
    <h2 style={s}>This is the combination of all the small projects I've made</h2>
  )
}

export default App;