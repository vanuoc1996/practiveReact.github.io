import '../css/login.css';
import '../css/App.css';
import React from 'react'
import person from '../Bai3/person';



function Exercise1q1() {
    return (
        <>
            Some text.
            <h2 style={{ color: "black" }} >A heading</h2>
        More text.
            <h2 style={{ color: "black" }}>Another heading</h2>
        Even more text.
        </>
    )
}

// Exercise1 Question 2: Table
function TableHeader() {
    return (
        <>
            <th>Họ tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
        </>
    )
}
function TableColumns() {
    return (
        <>
            <tr>
                <td>Trần Anh Đức</td>
                <td>03/08/1993</td>
                <td>Nam</td>
            </tr>
            <tr>
                <td>Kiều Thị Thu Hằng</td>
                <td>03/08/1991</td>
                <td>Nữ</td>
            </tr>
            <tr>
                <td>Vương Thị Lê Na</td>
                <td>03/08/1990</td>
                <td>Nam</td>
            </tr>

        </>
    )
}

// Exercise 2

function Exercise2q1a() {
    function action() {
        var q5 = document.getElementById("name").value;
        if (q5 != null) {
            window.alert("Hello " + q5);
        }
    }
    return (
        <>
            Name: <span><input id="name" /></span>
            <input type="submit" onClick={action}></input>
        </>
    )
}

function Exercise2q1b() {
    function action() {
        var q5 = document.getElementById("food").value;
        if (q5 != null) {
            window.alert("Bạn đã chọn " + q5);
        }
    }
    return (
        <>
            <span >Lựa chọn danh sách: </span>
            <select id="food">
                <option>Cam</option>
                <option>Quýt</option>
                <option>Mít</option>
                <option>Dừa</option>
            </select>
            <button onClick={action}>Lựa chọn</button>
        </>
    )
}

function Exercise2q1c() {
    function action() {
        var name = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        window.alert("Chào mừng: " + name + "\n \Mật khẩu của bạn là: " + password);
    }
    return (
        <div className="login" id="login1">
            <br /><br />
            <div className="loginCenter">
                <h1>Login Form</h1>
                <br /><br />
                <input className="inputLogin" placeholder="Email or Username" id="username"></input>
                <br /><br />
                <input className="inputLogin" placeholder="Password" type="password" id="password"></input>
                <br /><br />
                <button className="buttonLogin" onClick={action}><b>LOGIN</b></button>
                <br /><br />
                <>Or login with</>
                <br /><br />
                <button>Facebook</button><button>Google</button>
                <br /><br />
                <br /><br />
                <>Not a member? <a href="#login1">Signup now</a></>
                <br /><br />
                <br /><br />
            </div>
        </div>
    )
}

class Exercise3q2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "",
            timer: false,
            counter: 0
        };
        this.handlerCopy = this.handlerCopy.bind(this);
    }
    handlerCopy(e) {
        e.preventDefault(); //
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
        alert("Don't copy it!");
    }

    render() {
        return (
            <>
                <p onCopy={this.handlerCopy}>Copy me!</p>
                <p>Copy count: {this.state.counter}</p>
            </>
        );
    }


}

class Exercise3q4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: " "
        }
    }
    changeName = (event) => {
        this.setState(
            {
                fullName: event.target.value
            }
        );
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <h1>Full Name: {this.state.fullName}</h1>
                    <input type="text" onChange={this.changeName}></input>
                </div>
            </React.Fragment>
        )
    }
}



function Exercise4q1a() {
    const character = ['a', 'b', 'c', 'd'];
    const listCharacter = character.map((number) => <li>{number}</li>)
    return (
        <div>
            <h3>Character List</h3>
            <ul>
                {listCharacter}
            </ul>
        </div>
    );
}


function Exercise4q1b() {
    const character = ['Nguyễn Ngọc Duy',
        'Tống Quang Anh',
        'Đinh Thu Loan',
        'Hà Văn Tiến'
    ];
    const listCharacter = character.map((number) => <li>{number}</li>)
    return (
        <div>
            <h3>Danh Sách Lớp Học</h3>
            <ol>
                {listCharacter}
            </ol>
        </div>
    );
}

// function Exercise4q1c() {
//     const data = [
//         {
//             firstName: 'Nguyễn Văn',
//             lastName: 'A',
//             age: '20',
//             slogan: 'không làm mà đòi ăn'
//         },
//         {
//             firstName: 'Nguyễn Văn',
//             lastName: 'B',
//             age: '25',
//             slogan: 'Hoa rơi cửa phật'
//         },
//         {
//             firstName: 'Nguyễn Văn',
//             lastName: 'C',
//             age: '15',
//             slogan: 'abc'
//         }
//     ];
//     const personlist = data.map(boj => <person firstName={obj.firstName}
//         lastName={obj.lastName} age={obj.age} slogan={obj.slogan}></ person>)
//     const getFullName = () => {
//         return firstName + " " + lastName;
//     }

//     return (
//         <div className="person">
//             <h1>Full name: {getFullName()}</h1>
//             <p>Age: {age}</p>
//             <p>Năm sinh: {new Date().getFullYear() - age}</p>
//         </div>
//     )
// }




class Exercise4q2 extends React.Component {
    hello = () => {
        console.log("hello");
    }
    render() {
        return (
            <button onClick={this.hello}>Arrow function</button>
        );
    }
}

// class Exercise5q1 extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleLoginClick = this.handleLoginClick.bind(this);
//         this.handleLogoutClick = this.handleLogoutClick.bind(this);
//         this.state = { isLoggedIn: false };
//     }

//     handleLoginClick() {
//         this.setState({ isLoggedIn: true });
//     }

//     handleLogoutClick() {
//         this.setState({ isLoggedIn: false });
//     }

//     render() {
//         const isLoggedIn = this.state.isLoggedIn;
//         let button;

//         if (isLoggedIn) {
//             button = <LogoutButton onClick={this.handleLogoutClick} />;
//         } else {
//             button = <LoginButton onClick={this.handleLoginClick} />;
//         }

//         return (
//             <div>
//                 <Greeting isLoggedIn={isLoggedIn} />
//                 {button}
//             </div>
//         );
//     }
// }

// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <UserGreeting />;
//     }
//     return <GuestGreeting />;
// }

// function LoginButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Login
//         </button>
//     );
// }

// function LogoutButton(props) {
//     return (
//         <button onClick={props.onClick}>
//             Logout
//         </button>
//     );
// }






export default {
    Exercise1q1, TableHeader, TableColumns, Exercise2q1a, Exercise2q1b, Exercise2q1c,
    Exercise3q2, Exercise3q4,
    Exercise4q1a, Exercise4q2, Exercise4q1b

}