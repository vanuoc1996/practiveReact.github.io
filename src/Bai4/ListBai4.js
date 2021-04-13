import '../css/App.css';
import React from 'react'
import Bai4 from './bai4'
import Person from '../Bai3/person'
import Test from './test'




function ListBai4(){
    return(
        <>
        <div className="bt">
<h1 className="center" id="itemb4">----------------BÀI 4----------------</h1>
      <h2 id="item41">Exercise 1: Fragment</h2>
      <h4>Question 1</h4>
      <Bai4.Exercise1q1 />
      <h4>Question 2</h4>
      <table className="table1">
        <tr><Bai4.TableHeader /></tr>
        <><Bai4.TableColumns /></>
      </table>
      </div>


      <div className="bt">
      <h2 id="item42">Exercise 2: Form</h2>
      <h4>Question 1</h4>
      <Bai4.Exercise2q1a />
      <br /><br />
      <Bai4.Exercise2q1b />
      <br /><br />
      <Bai4.Exercise2q1c />
      <h4>Question 2</h4>
      </div>

      <div className="bt">
      <h2 id="item43">Exercise 3: Event</h2>
      <h4>Question 1</h4>
      <Person.Exercise3q1a />
      <br /><br />
      <Person.Exercise3q1b />
      <h4>Question 2</h4>
      <Bai4.Exercise3q2 />
      <h4>Question 4</h4>
      <Bai4.Exercise3q4 />
      </div>

      <div className="bt">
      <h2 id="item44">Exercise 4: List</h2>
      <h4>Question 1</h4>
      <Bai4.Exercise4q1a />
      <Bai4.Exercise4q1b />
      {/* <Bai4.Exercise4q1c /> */}
      <br /><br />
      {/* <Bai4.Exercise4q2 /> */}
      </div>


      <div className="bt">
      <h2 id="item45">Exercise 5: Render Element</h2>
      <h4>Question 1</h4>
      {/* <bai4.Exercise5q1 /> */}
      </div>

        </>
    )
}


export default ListBai4