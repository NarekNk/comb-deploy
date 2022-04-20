import React, { useEffect, useState } from "react";


const Calendar = () => {
    let now = new Date();
    const [year, setYear] = useState(now.getFullYear());
    const [month, setMonth] = useState(now.getMonth());


    let date = new Date(year, month, 1);
    let firstWeekDay = date.getDay() === 0 ? 7 : date.getDay();
    let dayCount = new Date(year, month + 1, 0).getDate();

    let cal = [];

    for (let i = 1; i <= dayCount; i++) {
        cal.push(i);
    }


    let lastMonthLastDay = new Date(year, month, 0).getDate();

    for (let i = 0; i < firstWeekDay - 1; i++) {
        cal.unshift(lastMonthLastDay--);
    }

    let total = (7 - (cal.length % 7));
    for (let i = 0; i < total; i++) {
        cal.push(i + 1)
    }

    let calendar = [];

    for (let i = 0; i < (cal.length / 7); i++) {
        let row = [];
        for (let j = 0; j < 7; j++) {
            row[j] = cal[i * 7 + j];
        }
        calendar.push(row);
    }


    const selectYear = (e) => {
        e.target.classList.toggle("selected-day")
    }

    let final = calendar.map((row, ind) => {
        return (
            <div key={ind} className="row">
                {row.map(i => <span onClick={selectYear}
                    className={`day ${((ind === 0 && i > 20) || ((ind === calendar.length - 1) && i < 10)) ? "zero" : null}`}>{i}</span>)}
            </div>)
    });

    let head = <div className="row head">{["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(i => <span className="day">{i}</span>)}</div>

    final.unshift(head)

    const [current, setCurrent] = useState(0);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const leftM = () => setCurrent((current - 1) === -1 ? 11 : current - 1);
    const rightM = () => setCurrent((current + 1) === 12 ? 0 : current + 1);

    const leftY = () => setYear(year - 1);
    const rightY = () => setYear(year + 1);


    useEffect(() => {
        setMonth(current);
    }, [current]);


    return (
        <div>
            <div className="calendar">
                <Months months={months} current={current} left={leftM} right={rightM} />
                <Years year={year} left={leftY} right={rightY} />
                <div className="days">{final}</div>
                
            </div>
        </div>
    )
}


const Months = ({ months, current, left, right }) => {
    return (
        <div className="carousel months">
            <button onClick={left}>&#x21E6;</button>
            <div className="month-name">{months[current]}</div>
            <button onClick={right}>&#x21E8;</button>
        </div>
    )
}

const Years = ({ year, left, right }) => {
    return (
        <div className="carousel years">
            <button onClick={left}>&#x21E6; {year - 1}</button>
            <div className="selected-year">{year}</div>
            <button onClick={right}>{year + 1} &#x21E8;</button>
        </div>
    )
}

export default Calendar;