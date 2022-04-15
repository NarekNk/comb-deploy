import React, { useEffect, useState } from 'react';
import { connect, Provider } from 'react-redux';
import './App.css';
import { getCurrentWeather } from './redux/forecastReducer';
import store from './redux/store';

let App = ({ currentWeather, getCurrentWeather }) => {

  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");
  const [done, setDone] = useState(false);
  // const [weather, setWeather] = useState({});


  const search = (e) => {
    e.preventDefault();
    setQuery(value);
    setValue('');
  }

  useEffect(() => {
    if(query) {
      getCurrentWeather(query);
      setDone(true);
    }
  }, [query])

  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value}></input>
      <button onClick={search}>Search</button>

      <div>
        {done && currentWeather.temperature}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentWeather: state.currentWeather
  }
}

App = connect(mapStateToProps, { getCurrentWeather })(App);

const AppCont = (props) => {
  return <Provider store={store}>
    <App></App>
  </Provider>
}


export default AppCont;