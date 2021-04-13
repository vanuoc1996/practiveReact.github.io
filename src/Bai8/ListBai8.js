import '../css/App.css';
import React from 'react'
import Bai8 from './bai8'




function ListBai8() {
    return (
        <>
            <div className="bt">
                <h1 className="center" id="itemb5">----------------BÀI 8----------------</h1>
                <h2>Exercise 1:  State Hook</h2>
                <h4>Question 1:</h4>
                <Bai8.VD1 />
                <h4>Question 2:</h4>
                <p>(a)</p>
                <Bai8.Exercise1q2a />
                <p>(b)</p>
                <Bai8.Exercise1q2b />
                <p>(c)</p>
                <Bai8.Exercise1q2c />
            </div>

            <div className="bt">
                <h2>Exercise 2:  Effect Hook</h2>
                <h4>Question 1:</h4>
                <Bai8.Exercise2q1 />
                <h4>Question 2:</h4>
                <div>Đang cập nhật</div>
            </div>

            <div className="bt">
                <h2>Exercise 3:  Context Hook</h2>
                <h4>Question 1:</h4>
                <Bai8.Exercise3q1 />
                <h4>Question 2:</h4>
                <p>(a)</p>
                <Bai8.Exercise3q2a />
                <p>(b)</p>
            </div>

            <div className="bt">
                <h2>Exercise 4:  Custom Hook</h2>
                <h4>Question 1:</h4>
                <Bai8.Exercise4q1 />
                <h4>Question 2:</h4>
                <Bai8.Exercise4q2 />
            </div>

        </>
    )
}


export default ListBai8