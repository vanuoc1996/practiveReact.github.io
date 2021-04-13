import '../css/App.css';
import React from 'react'
import Bai9 from './bai9'
// import Bai6 from './bai6'


function ListBai9() {
    return (
        <>
            <div className="bt">
                <h1 className="center" id="itemb5">----------------BÀI 9----------------</h1>
                <h2 id="item61">Exercise 1: </h2>
                <h4>Ví Dụ 1</h4>
                <Bai9.Counter />
                <h4>Ví Dụ 2</h4>
                <Bai9.VD2 />
                <div>Đang cập nhật</div>
            </div>

        </>
    )
}


export default ListBai9