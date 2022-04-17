import axios from "axios";

const SET_RATES = "SET_RATES";

const initialState = {
    rates: [],
    user: {}
}

const exchangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RATES:
            return {
                ...state,
                rates: [...action.rates]
            }
        default:
            return state;
    }
}


const setRates = (rates) => ({ type: SET_RATES, rates });


export const getRates = () => (dispatch) => {
    axios.get("https://api.coincap.io/v2/rates")
        .then(response => dispatch(setRates(response.data.data)));

}

export default exchangeReducer;