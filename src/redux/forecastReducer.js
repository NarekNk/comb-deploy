import axios from "axios";

const initState = {
    currentWeather: {}
};


const API_KEY = "d7ec3205a9f66cec2df36c52244371ef";


const SET_CURRENT = "SET_CURRENT";

const forecastReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT:
            debugger;
            return {
                ...state,
                currentWeather: action.currentWeather
            }
        default:
            return state;
    }
}
const setCurrentWeather = (currentWeather) => ({ type: SET_CURRENT, currentWeather })

const instance = axios.create({
    baseURL: "http://api.weatherstack.com/",
})

export const getCurrentWeather = (query) => (dispatch) => {
    instance.get(`current?access_key=${API_KEY}&query=${query}`)
        .then(res => dispatch(setCurrentWeather(res.current)));
    // dispatch(setCurrentWeather(curr))
}


export default forecastReducer;