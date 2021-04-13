import '../css/App.css';
import React from 'react'
import Person from './person'
import Bai3 from './bai3'



function hello() {
  console.log("Hello!");
  alert("Done")
}

function ListBai3() {
  return (
    <>
      <div className="bt">
        <h1 className="center">----------------BÀI 3----------------</h1>
        <h2 id="item31">Exercise 1: JSX</h2>
        <h4>Question 1 + 2</h4>
        <Bai3.Exercise1q1 />
        <h4>Question 2</h4>
        <Bai3.Exercise1q2 />
        <div className="center"><button onClick={hello}>Click heare!</button></div>
        <h4>Question 3</h4>
        <Bai3.Exercise1q3 />
        <section>
          <h3>Học lập trình web có đơn giản không?</h3>
          {/* <IMG SRC="GetImage()" /> */}
          {/* <img src= "https://i.imgur.com/hRUoeUf.jpg" alt="" /> */}
          <img src="img/1.jpg" />
        </section>
        <input id></input>
      </div>

      <div className="bt">
        <h2 id="item32">Exercise 2: Class Component</h2>
        <h4>Question 1</h4>
        <div className="center">
          <Person.Person firstName="Nguyễn" lastName="Văn A" age="26" />
          <Person.person2 />
        </div>
        <div className="container">
          <div className="header">Header "Height: 110px"</div>
          <div className="nav">Nav "height : 40px</div>
          <div className="container1">
            <div className="container2">
              <div className="section">Section "height: 200px"</div>
              <div className="artilce">Artile "height 200px"</div>
            </div>
            <div className="aside">Aside: "heigt 400px"</div>
          </div>
          <div className="footer">Footer: ""height: 110 px</div>
        </div>
        <br />
        <br />
      </div>

      <div className="bt">
        <h2 id="item34">Exercise 4: Props</h2>
        <h4>Question 1: variable</h4>
        <Bai3.Exercise4q1 fullname="Vũ Văn Ước" age="25" />
        <Bai3.Exercise4q1 fullname="Nguyễn Văn B" age="20" />
        <h4>Question 2: props.children</h4>
        <Bai3.Exercise4q2 firstName="Nguyễn Văn" lastName="A" age="25">Hồng nhan</Bai3.Exercise4q2>
        <Bai3.Exercise4q2 firstName="Nguyễn Văn" lastName="B" age="20">Sóng gió</Bai3.Exercise4q2>
        <h4>Question 3: props default</h4>
        <Bai3.Exercise4q3 firstName="Vũ Văn" lastName="A" age="20" />
        <h4>Question 4: pass component to component (Generic box)</h4>
        <Bai3.Exercise4q4></Bai3.Exercise4q4>
      
      </div>


      <div className="bt">
        <h2 id="item35">Exercise 5: State</h2>
        <h4>Question 1</h4>
        <Bai3.Exercise5q1a />
        <h4>Question 2</h4>
        <h3>Hello World</h3>
        <Bai3.Exercise5q1b />
        <h4>Question 3</h4>
        <Bai3.Exercise5q1c></Bai3.Exercise5q1c>
      </div>
    </>
  )
}


export default ListBai3