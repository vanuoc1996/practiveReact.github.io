import DataTable from '../Component/group/table';
import React from 'react';
import '../../css/App.css';
import NavTopTable from '../Component/common/navTopTable';
import MenuTable from '../Component/common/menuTable';


function displayTable() {
    return (
        <div className="bt">
            <div>
                <NavTopTable /><br /><br />
            </div>
            <div>
                <MenuTable /><br />
            </div>
            <div >
                <DataTable.DemoTable />
            </ div>
        </div>
    )
}
export default displayTable;