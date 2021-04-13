import React from 'react'

class Exercise5q1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: ''
        };
    }
    handleChange = (e) => {
        this.setState({
            temp: e.target.value
        });
    }

    render() {
        return (
            <fieldset>
                <legend>Enter temp in Celsius: </legend>
                <input value={this.state.temp} onChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(this.state.temp)} />
            </fieldset>
        )
    }
}

const BoilingVerdict = (props) => {
    if (props.celsius >= 100) {
        return <p>the water would boil</p>
    }
    return <p>The water would not boil</p>
}


class Exercise5q2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    receiveInputChanging = (newName) => {
        this.setState({
            name: newName
        })
    }
    render() {
        return (
            <div>
                <this.inputName name={this.state.name} changeInputName={this.receiveInputChanging} />
                <div>Hello {this.state.name}</div>
                <br />
            </div>
        )
    }
    inputName = (props) => {
        const handleChangeInput = (event) => {

            props.changeInputName(event.target.value)
        }
        return (
            <div>
                name:
                <input type="text" value={props.name} onChange={handleChangeInput} />
            </div>
        )
    }
}






const money = {
    vnd: 'VND',
    usa: 'USA'
};
function toUSA(VND) {
    return (VND * 0.00004)
}
function toVND(USA){
    return(USA*25000)
}

// class inputMoney extends React.Component{
// constructor(props){
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
// }
// handleChange(e){
//     this.props.onTemperatureChange(e.target.value);
// }
// render(){
//     const money = this.props.money;
//     const 
// }
// }












function VD1() {
return(
    <>


    </>
)
}
export default { Exercise5q1, Exercise5q2, VD1 }