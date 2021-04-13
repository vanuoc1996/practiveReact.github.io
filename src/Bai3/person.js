import '../css/App.css';
import React from 'react'
import '../css/person.css'

class Person extends React.Component {
    render() {
        return (
            <div className="person">
                <h1>First name: {this.props.firstName}</h1>
                <h1>First name: {this.props.lastName}</h1>
                <h1>Full name: {this.props.firstName}  {this.props.lastName} </h1>
                <p>Age: {this.props.age} </p>
                <p>Năm sinh: {new Date().getFullYear() - this.props.age}</p>
            </div>
        );
    }
}


function person2() {
    const firstName = "Nguyễn";
    const lastName = "Văn B";
    const age = "20"
    const getFullName = () => {
        return firstName + " " + lastName;
    }

    return (
        <div className="person">
            <h1>First name: {firstName}</h1>
            <h1>Last name: {lastName}</h1>
            <h1>Full name: {getFullName()}</h1>
            <p>Age: {age}</p>
            <p>Năm sinh: {new Date().getFullYear() - age}</p>
         
        </div>
    )
}

class Exercise3q1a extends React.Component {
    static defaultProps = {
        class: 'Railway'
    };
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    hello = () => {
        console.log("hello");
    }
    render() {
        return (
            <button onClick={this.hello}>Bind method</button>
        );
    }
}

class Exercise3q1b extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }
        hello = (e) => {
            console.log("hello");
            e.preventDefault(); //
            this.setState(prevState => ({
                counter: prevState.counter + 1
            }));
        }
        render() {
            return (
                <>
                    <button onClick={this.hello}>Arrow function</button>
                    <span>Count Click: {this.state.counter}</span>
                </>
            );
        }
    
}




export default { Person, person2, Exercise3q1a, Exercise3q1b }; 