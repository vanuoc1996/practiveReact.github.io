import React from 'react'

class Test extends React.Component {
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

// class Exercise1q1 extends React.Component{
//     render(){
//     return (
//         <Rect.Fragment>
//           <div>Some text.</div>
//           <h2>A heading</h2>
//           <div>More text.</div>
//           <h2>Another heading</h2>
//           <div>Even more text.</div>
//         </ Rect.Fragment>
//        );
//     }
// }

export default Test