import '../css/App.css';
import React from 'react'
import signin from './sigin'
import signup from './signup'




function ListBai8() {
    return (
        <>
            <div className="bt">
                <h1 className="center" id="itemb5">----------------BÀI 10----------------</h1>
                <h2 id="item61">Exercise 1:</h2>
                <h4>Question 1</h4>
                <signin.SignIn />
            </div>

            <div className="bt">
                <signup.SignUp />
            </div>

        </>
    )
}


export default ListBai8