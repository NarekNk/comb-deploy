import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CurrentWeather from './../CurrentWeather/CurrentWeather';
import { getCurrentWeather, getCurrentWeatherRapid } from '../../redux/currentReducer';
import styles from "./Search.module.css"
import { Link } from 'react-router-dom';


const Search = ({ getCurrentWeather, getCurrentWeatherRapid }) => {

    const [value, setValue] = useState("");
    const [query, setQuery] = useState("");
    const [done, setDone] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        setQuery(value);
        setValue('');
    }

    const enterSearch = e => {
        if (e.code === "Enter") {
            setQuery(value);
            setValue('');
        }
    }

    useEffect(() => {
        if (query !== "") {
            // getCurrentWeather(query);
            getCurrentWeatherRapid(query)
            setDone(true)
        }
    }, [query, getCurrentWeather])

    return (
        <div className={styles.box}>
            <nav>
                <ul>
                    <Link to={"/"}><li>Home</li></Link>
                    <Link to={"/tenzies"}><li>Tenzies</li></Link>
                    <Link to={"/exchange"}><li>Exchange</li></Link>
                    <Link to={"/calendar"}><li>Calendar</li></Link>
                </ul>
            </nav>
            <div className={styles.form}>
                <input
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder="City name"
                    className={styles.searchInput}
                    onKeyDown={enterSearch}/>
                    <button onClick={submitSearch} className={styles.searchBtn}><Link to={`/weather/${value}`}>Search</Link></button>                
            </div>
        </div>
    );
}


export default connect(null, { getCurrentWeather, getCurrentWeatherRapid })(Search);