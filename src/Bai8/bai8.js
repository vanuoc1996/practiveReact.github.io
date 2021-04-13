import React, { useEffect, useMemo, useState, useContext } from 'react';


// const cache = [];
// const sum = (a: number, b: number) => {
//     const key = `${a}_${b}`
//     const synmetrickey = `${b}_${a}`

// if cache[key]{
//     return cache[key]
// }
// if cache[synmetrickey]{
//     return cache[synmetrickey]
// }
// }

function VD1() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [counter, setCount] = useState(0);
    const sum = (a, b) => {
        console.log("đang tính toán");
        return a + b;
    }
    const sumResult = useMemo(() => sum(a, b), [a, b]);
    return (
        <>
            <form>
                a:
<input type="number" value={a} onChange={(e) => setA(e.target.value)} />< br />< br />
                <label>
                    b:
                <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
                </label>< br />< br />
                <label>
                    sum: {sumResult}
                </label>
            </form>
            <p>Counter: {counter}</p>
            <button onClick={() => setCount(counter + 1)}>
                incresr count
        </button>
        </>
    )
}
function Exercise1q2a() {
    const text = `Focused, hard work is the real key to success.
Keep your eyes on the goal, and just keep taking the next step towards completing it.`
    const maxLength = 35
    const [hidden, setHidden] = useState(true);
    if (text <= maxLength) {
        return <span>{text}</span>
    }
    return (
        <span>
            {hidden
                ? `${text.substr(0, maxLength).trim()} ...`
                : text}
            {hidden ? (
                <a style={{ color: "red" }} onClick={() => setHidden(false)}> read more</a>
            ) : (
                    <a style={{ color: "red" }} onClick={() => setHidden(true)}> read less</a>
                )}
        </span>
    )

}

function Exercise1q2b() {
    const [message, setMessage] = useState("");
    return (
        <>
            <input type="text"
                value={message}
                placeholder="Enter a message"
                onChange={e => setMessage(e.target.value)}
            />
            <p>message: <b>
                {message}
            </b></p>
        </>
    )
}
function Exercise1q2c() {
    const [steps, setSteps] = useState(0);
    const increment = () => {
        setSteps(steps + 1)
    }
    return (
        <>
            <button onClick={increment} >Click here!!!</button>
            <div>count: {steps}</div>
        </>
    )
}


function EffectLifecycle(props) {
    const useEffect = () => {
        console.log("render!");
        return () => console.log("unmounting!");
    }
    return (
        <span>{props.number}</span>
    )
}
function Exercise2q1() {
    const [randomNumber, setRandomNumber] = useState(Math.random());
    const [isShow, setShow] = useState(true);
    const reRender = () => setRandomNumber(Math.random())
    const toggle = () => setShow(!isShow)
    return (
        <>
            <p>Random number: {isShow && <EffectLifecycle number={randomNumber} />}</p>
            <button onClick={reRender}>Re-render</button><br />
            <button onClick={toggle}>Show/Hide Component</button>
        </>
    )
}

// Exercise3 question 1
const MessageContext = React.createContext();
function ParentComponent(props) {
    return (
        <ChildComponent />
    )
}
function Exercise3q1() {

    const message = "Lời nhắn từ grand Parent Component!"
    return (
        <MessageContext.Provider value={message}>
            <ParentComponent />
        </MessageContext.Provider>
    )
}
function ChildComponent(props) {
    const message = useContext(MessageContext)
    return (
        <div>
            Message from Grandparent: {message}
        </div>
    )
}
// Exercise3 question 2a
const NumberContext = React.createContext();
function Exercise3q2a() {
    // number = 44;
    return (
        <NumberContext.Provider value={44}>
            <div>
                <Display />
            </div>
        </NumberContext.Provider>
    )
}

function Display() {
    const number = useContext(NumberContext)
    return (
        <div>
            The answer is: {number}
        </div>
    );
}

// Exercise4 question 1
function useClock() {
    const [time, setTime] = useState("");
    const [ampm, setampm] = useState("");

    // Function cập nhật thời gian.
    const updateTime = function () {
        let dateInfo = new Date();
        let hour = 0;

        /* Lấy giá trị của giờ */
        if (dateInfo.getHours() === 0) {
            hour = 12;
        } else if (dateInfo.getHours() > 12) {
            hour = dateInfo.getHours() - 12;
        } else {
            hour = dateInfo.getHours();
        }

        /* Lấy giá trị của phút */
        let minutes =
            dateInfo.getMinutes() < 10
                ? parseInt("0" + dateInfo.getMinutes())
                : dateInfo.getMinutes();

        /* Lấy gía trị của giây */
        let seconds =
            dateInfo.getSeconds() < 10
                ? "0" + dateInfo.getSeconds()
                : dateInfo.getSeconds();

        /* Định dạng ngày */
        let ampm = dateInfo.getHours() >= 12 ? "PM" : "AM";

        /* Cập nhật state */
        setampm(ampm)
        setTime(`${hour}:${minutes}:${seconds}`);
    };

    setInterval(function () {
        updateTime();
    }, 1000);

    return [time, ampm];
}
function Clock1() {
    //Gọi custom hook để sử dụng
    const [time, ampm] = useClock();
    const style = {
        width: "100px",
        backgroundColor: "black",
        color: "white",
        margin: "2",
        padding: "20px",
        marginLeft: "10px"
    };
    return (
        <div style={style}>
            <span>{time}</span>
            <span>{ampm}</span>
        </div>
    );
}
function Clock2() {
    // gọi Custom hook để sử dụng
    const [time, ampm] = useClock();
    const style = {
        width: "100px",
        backgroundColor: "blue",
        borderRadius: "20px",
        color: "white",
        margin: "10px 2px 2px 10px",
        padding: "20px"
    };
    return (
        <div style={style}>
            <span>{time}</span>
            <span>{ampm}</span>
        </div>
    )
}
function Exercise4q1() {
    return (
        <div style={{ textAlign: "center" }}>
            <Clock1 />
            <Clock2 />
        </div>
    )
}

// Exercise4 question 1
function Exercise4q2(props) {
    const [color, setColor] = useState('green')
    const circle = {
        height: "200px",
        width: "200px",
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: `${color}`,
        padding: "50px 50px 50px 50px"
    }

    useEffect(() => {
        const intervalColor = setInterval(() => {
            const newColor = Math.floor(Math.random() * 999999)
            setColor(`#${newColor}`)
        }, 1000);
        return () => {
            clearInterval(intervalColor)
        }
    }, [])
    return (
        <span style={circle}>
            Big Circle
        </span>
    );
}



export default {
    VD1, Exercise1q2a, Exercise1q2b, Exercise1q2c,
    Exercise2q1,
    Exercise3q1, Exercise3q2a,
    Exercise4q1, Exercise4q2
    
};