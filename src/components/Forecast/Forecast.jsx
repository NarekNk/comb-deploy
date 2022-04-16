import React from "react";
import { connect } from "react-redux";
import { getForecast } from "../../redux/forecastReducer";

const Forecast = ({forecast, getForecast}) => {
    return (
        <div>Forecast</div>
    )
}

const mapStateToProps = (state) => {
    return {
        forecast: state.forecastReducer.forecast
    }
}

export default connect(mapStateToProps, { getForecast })(Forecast);