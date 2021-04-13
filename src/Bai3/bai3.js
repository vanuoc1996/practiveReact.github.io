import '../css/App.css';
import '../css/person.css'
import ToggleOffIcon from '@material-ui/icons/ToggleOff';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import React from 'react'


function Exercise1q1() {
    return (
        <div>
            <h1 className="center">Hello World</h1>
            <div className="center">My first paragraph</div>
        </div>

    )
}

function Exercise1q2() {
    return (
        <div>
            <h2 className="center">Danh sách lớp học</h2>
            <ol>
                <li>Nguyễn Ngọc Duy</li>
                <li>Tống Quang Anh</li>
                <li>Đinh Thu Loan</li>
                <li>Hà Văn Tiến</li>
                <li>Nguyễn Hải Đăng</li>
                <li>Nguyễn Tiến Quang</li>
                <li>Nguyễn Văn Chiến</li>
            </ol>

            <ol>
                <li>Cơm trưa</li>
                <ul>
                    <li>Cơm Chiên Hải Sản</li>
                    <li>Cơm sườn non</li>
                    <li>Cơm canh chua</li>
                </ul>
                <br></br>
                <li>Tráng miếng trái cây</li>
                <ul>
                    <li>Nho</li>
                    <li>Mận</li>
                    <li>Chuối</li>
                </ul>
            </ol>
        </div>
    )
}

function Exercise1q3() {
    return (
        <>
            <div className="vd1">Hello World</div>
            <br></br>
            <div className="vd2">Hello World</div>
            <br></br>
            <div className="vd3">Hello World</div>
            <br></br>
        </>
    )
}
function Exercise4q1(props) {
    return (
        <div className="person">
            <h2>Full name: {props.fullname}</h2>
            <div>Age: {props.age}</div>
        </div>
    );
}

function Exercise4q2(props) {
    return (
        <div className="person">
            <h1>First name: {props.firstName}</h1>
            <h1>Last name: {props.lastName}</h1>
            <h1>Full name: {props.firstName}  {props.lastName} </h1>
            <p>Age: {props.age} </p>
            <p>Năm sinh: {new Date().getFullYear() - props.age}</p>
            <p>Slogan: {props.children}</p>
        </div>
    );
}

Exercise4q3.defaultProps = {
    children: "Không có lý tưởng sống"
};
function Exercise4q3(props) {
    return (
        <div className="person">
            <h1>First name: {props.firstName}</h1>
            <h1>Last name: {props.lastName}</h1>
            <h1>Full name: {props.firstName}  {props.lastName} </h1>
            <p>Age: {props.age} </p>
            <p>Năm sinh: {new Date().getFullYear() - props.age}</p>
            <p>Slogan: {props.children}</p>
        </div>
    );
}

function Exercise4q4(props) {
    const BodyHorizontal = () => { <Exercise4q4 style="BodyHorizontal"></Exercise4q4> }
    const BodyVertical = () => { <Exercise4q4 style="BodyHorizontal" /> }
    return (
        <div>
            <button onClick={BodyHorizontal}>Display 1</button>
            <button onClick={BodyVertical}>Display 2</button>
            <div>Header</div>
            <div>{props.style}</div>
            <div>Footer</div>
        </div>
    );
}



class Exercise5q1a extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }
    render() {
        return (
            <div>
                <h3>Bây giờ là: {this.state.time.toLocaleTimeString()}</h3>
                <button onClick={this.updateTime}>Cập nhật giờ</button>
            </div>
        )
    }
    updateTime = () => {
        this.setState(
            {
                time: new Date()
            }
        )
    }
}

class Exercise5q1b extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        };
    }
    action = () => {
        this.setState({ isShow: !this.state.isShow });
    }
    render() {
        const bio = this.state.isShow ? (
            <p>aafadf afadf afasdf</p>
        ) : null;

        return (
            <>
                {bio}
                <button onClick={this.action}> {!this.state.isShow ? "Read More" : "Show Less"} </button>
            </>
        );
    }
}
class Exercise5q1c extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOff: true
        };
    }
    toggleOn = () =>{
        this.setState({isToggleOff: !this.state.isToggleOff})
    }
    render() {
        return (
            <div>
                
            <button onClick={this.toggleOn}>{!this.state.isToggleOff ? "<ToggleOff/>" : "<ToggleOn/>"}</button>
            </div>
        )
    }
}

        export default {
            Exercise1q1, Exercise1q2, Exercise1q3,
            Exercise4q1, Exercise4q2, Exercise4q3, Exercise4q4,
            Exercise5q1a, Exercise5q1b, Exercise5q1c
        }