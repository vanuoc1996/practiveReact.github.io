import '../css/App.css';
import React from 'react'
import Bai5 from './bai5'




function ListBai5() {
    return (
        <>
            <div className="bt">
                <h1 className="center" id="itemb5">----------------BÀI 5----------------</h1>
                <h2 id="item51">Exercise 1: Lifting State Up</h2>
                <h4>Question 1</h4>
                <Bai5.Exercise5q1 id="item51" />
                <h4>Question 2</h4>
                <Bai5.Exercise5q2 />
                < Bai5.VD1 />
            </div>
        </>
    )
}


export default ListBai5