import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Axios from 'axios'



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90},
  {
    field: 'fullName',
    headerName: 'Address',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 180,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];
const API = "https://5fa3f6abf10026001618e3b7.mockapi.io/demo"
const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
 
];

class DemoTable extends React.Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      groups: []
    };
  }
  getListGroup = function () {
    Axios.get(`${API}`)
      .then(response => {
        this.setState({
          groups: response.data
        });
      })
      .catch(error => console.log(error));
  }
  componentDidMount() {
    this.getListGroup();
  }
  render() {
    
    // const columns = [
    //   { field: 'id', headerName: 'ID', width: 70 },
    //   { field: 'firstName', headerName: 'First name', width: 150 },
    //   { field: 'lastName', headerName: 'Last name', width: 150 },
    //   { field: 'age', headerName: 'Age', type: 'number', width: 90},
    //   {
    //     field: 'Address',
    //     headerName: 'Address',
    //     description: 'This column has a value getter and is not sortable.',
    //     sortable: false,
    //     width: 180,
    //   },
    // ];
    
    // const rows = this.state.groups.map(
    //   group =>
    //   { id = group.id,
    //     lastName = group.lastName, 
    //     firstName = group.firstName , 
    //     age = group.age,
    //     Address = group.Address
    //      },
    // );

    return (
      <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
    );
}
}



function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
export default { DataTable, DemoTable }