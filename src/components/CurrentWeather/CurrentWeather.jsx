import React from "react";
import { connect } from "react-redux";
import styles from "./CurrentWeather.module.css";

const CurrentWeather = ({ currentWeather, location }) => {
    let descriptions;
    if (!currentWeather) {
        return (
            <div><b>Invalid Input</b></div>
        )
    };
    if (Object.keys(currentWeather).length) {
        descriptions = currentWeather.weather_descriptions.map(i => <p key={i}>{i}</p>);
    }

    return (
        <div className={styles.tab}>
            <p>{location.country}</p>
            <p>{location.name}</p>

            <div className={styles.temp}>
                <img src={currentWeather.weather_icons} alt="" />
                <p><b>{currentWeather.temperature} °C</b></p>
            </div>

            {descriptions}
            <p>Wind speed : {currentWeather.wind_speed} mph</p>
        </div>
    )
}



const mapStateToProps = (state) => {
    // debugger;
    return {
        currentWeather: state.currentReducer.currentWeather,
        location: state.currentReducer.location
    }
}


export default connect(mapStateToProps, null)(CurrentWeather);