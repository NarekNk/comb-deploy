import React, { useEffect, useState } from "react";
import styles from "./Tenzies.module.css"

const Tenzies = () => {

    const [win, setWin] = useState(false);

    let arr = [];
    for (let i = 0; i < 6; i++) {
        arr.push(Math.ceil(Math.random() * 6));
    }

    const [numbers, setNumbers] = useState(arr);


    const updateNum = (index) => {
        let digit = Math.ceil(Math.random() * 6);
        setNumbers(numbers.map((i, j) => j === index ? digit : i))
    }

    useEffect(() => {
        let m = numbers[0];
        let is = true;
        for (let i = 1; i < 6; i++) {
            if(numbers[i] !== m) {
                is=false;
                break;
            }
        }

        setWin(is);
    })

    return (
        <div className={styles.holder}>
            <h1>Tenzies</h1>
            <div className={styles.card}>
                {win && <h1>Victory!!!</h1>}
                {numbers.map((i, index) => <div key={index}
                    className={styles.num}
                    onClick={() => updateNum(index)}>{i}</div>)}
            </div>
        </div>
    )
}




export default Tenzies;