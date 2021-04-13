import React from 'react'


class Exercise1q2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { messeger: "Hello" };
        console.log("contructor");
    }
    render() {
        return (
            <div>
                <h3>{this.state.messeger}</h3>
                <button onClick={this.changeState}>Change</button>
            </div>
        )
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    changeState = () => {
        this.setState(
            {
                messeger: "Hello World"
            }
        );
        console.log("changeState");
    }
    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate" + true);
        return true
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    componentDidCatch(error, infor) {
        console.log("componentDidCatch");
    }
}


function WarningBanner(props) {
    const styleWarning = {
        backgroundColor: "black",
        textAlign: "center",
        width: "50%",
        padding: "30px",
        fontsize: "14pt",
        color: "red",
        marginLeft: "auto",
        marginRight: "auto",
    };
    return (
        <div style={styleWarning}>
            WarningBanner
        </div>
    )
}

class Exercise1q3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }
    render() {
        return (
            <div>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
                <WarningBanner warn={this.state.showWarning} />
            </div>
        );
    }
}



export default { Exercise1q2, Exercise1q3 }