import axios from "axios";

const initState = {
    currentWeather: {},
    location: {}
};


const API_KEY = "d7ec3205a9f66cec2df36c52244371ef";


const SET_CURRENT = "SET_CURRENT";
const SET_LOCATION = "SET_LOCATION";

const currentReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT:
            return {
                ...state,
                currentWeather: action.currentWeather
            }
        case SET_LOCATION:
            return {
                ...state,
                location: action.location
            }
        default:
            return state;
    }
}
const setCurrentWeather = (currentWeather) => ({ type: SET_CURRENT, currentWeather });
const setLocation = (location) => ({ type: SET_LOCATION, location });

const instance = axios.create({
    baseURL: "http://api.weatherstack.com/",
})

export const getCurrentWeather = (query) => (dispatch) => {
    instance.get(`current?access_key=${API_KEY}&query=${query}`)
        .then(res => {
            dispatch(setCurrentWeather(res.data.current));
            dispatch(setLocation(res.data.location))
        });
}

export const getCurrentWeatherRapid = (query) => (dispatch) => {
    axios.get(`https://community-open-weather-map.p.rapidapi.com/weather?q=${query}`, {
        headers: {
            'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
            'X-RapidAPI-Key': '6811750e56msh6c12021cfc50101p1f5871jsn61052f6c881e'
          }
    }).then(response => dispatch(setCurrentWeather(response.data.weather)));
}


export default currentReducer;