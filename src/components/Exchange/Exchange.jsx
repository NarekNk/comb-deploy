import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getRates } from "./../../redux/exchangeReducer";
import styles from "./Exchange.module.css"

const Exchange = ({ rates, getRates }) => {
    useEffect(() => {
        getRates();
    }, [])

    let [value, setValue] = useState(1);

    let [from, setFrom] = useState({});
    let [to, setTo] = useState({});

    useEffect(() => {
        setFrom({ ...rates[0] });
        setTo({ ...rates[0] });
    }, [rates])


    let [result, setResult] = useState(0);

    const onChange = (e) => {
        const rx_live = /^([0-9]{1,})?(\.)?([0-9]{1,})?$/;
        if (rx_live.test(e.target.value)) setValue(e.target.value);
    }

    const funcFrom = (e) => {
        setFrom(...rates.filter(i => i.symbol == e.target.value));
    }

    const funcTo = e => {
        setTo(...rates.filter(i => i.symbol === e.target.value));
    }

    const count = () => {
        setResult((+from.rateUsd * +value) / +to.rateUsd)
    }

    return (
        <>
            <h1 className={styles.header}>Exchange</h1>
            <div className={styles.cont}>
                <div className={styles.sell}>
                    <div className={styles.sellDiv}>
                        <p>You Sell : </p>
                        <input
                            className={styles.inp}
                            type="text"
                            value={value}
                            onChange={onChange} placeholder="0" />
                    </div>
                    <select name="from" onChange={funcFrom}>
                        {rates.map(i => <option key={i.id} value={i.symbol}>{i.symbol}</option>)}
                    </select>
                </div>


                <div className={styles.sell}>
                    <div>
                        <p>You Get : </p>
                        {result}  {to.symbol}
                    </div>
                    <select name="to" onChange={funcTo} value={to.symbol}>
                        {rates.map(i => <option key={i.id} value={i.symbol}>{i.symbol}</option>)}
                    </select>
                </div>
                <div>
                    <button onClick={count} className={styles.btn}>Convert</button>
                </div>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        rates: state.exchangeReducer.rates
    }
}

export default connect(mapStateToProps, { getRates })(Exchange);