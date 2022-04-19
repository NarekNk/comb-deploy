import axios from "axios";

const initState = {
    forecast: {}
};

const API_KEY = "d7ec3205a9f66cec2df36c52244371ef";
// const API_KEY = process.env.API_KEY;

const SET_FORECAST = "SET_FORECAST";

const forecastReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_FORECAST:
            return {
                ...state,
                forecast: action.forecast
            }
        default:
            return state;
    }
}

const instance = axios.create({
    baseURL: "https://api.weatherstack.com/forecast/",
})

const setForecast = (forecast) => ({ type: SET_FORECAST, forecast })

export const getForecast = (query = "New York", days = 7) => (dispatch) => {
    instance.get(`?access_key=${API_KEY}&query=${query}&forecast_days=${days}`)
        .then(res => dispatch(setForecast(res.data.forecast)));
}


export default forecastReducer;