import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CurrentWeather from './../CurrentWeather/CurrentWeather';
import { getCurrentWeather } from '../../redux/currentReducer';
import styles from "./Search.module.css"


const Search = ({ getCurrentWeather }) => {

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
            getCurrentWeather(query);
            setDone(true)
        }
    }, [query, getCurrentWeather])

    return (
        <div className={styles.box}>
            <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className={styles.searchInput}
                onKeyDown={ enterSearch }></input>
            <button onClick={submitSearch} className={styles.searchBtn}>Search</button>

            { done && <CurrentWeather/>}
        </div>
    );
}


export default connect(null, { getCurrentWeather })(Search);