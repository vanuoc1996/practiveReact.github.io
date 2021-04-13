import '../css/App.css';
import React from 'react'
import Bai6 from './bai6'




function ListBai6() {
    return (
        <>
            <div className="bt">
                <h1 className="center" id="itemb5">----------------BÀI 6----------------</h1>
                <h2 id="item61">Exercise 1: Lifting State Up</h2>
                <h4>Question 1</h4>
                <h4>Question 2</h4>
                <Bai6.Exercise1q2 />
                <h4>Question 3</h4>
                <Bai6.Exercise1q3 />
            </div>

        </>
    )
}


export default ListBai6