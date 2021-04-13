import React from 'react'
import Axios from 'axios'


class Exercise1q1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: []
        };
    }
    getListEmployee = function () {
        const baseURL = `https://5fa3f6abf10026001618e3b7.mockapi.io`;
        Axios.get(`${baseURL}/Employee`)
            .then(response => {
                this.setState({
                    employee: response.data
                });
            })
            .catch(error => console.log(error));
    }
    componentDidMount() {
        this.getListEmployee();
    }
    render() {
        const personList = this.state.employee.map(
            employee =>
                <li>
                    {employee.id} : {employee.name}
                </li>
        );
        return (
            <ul>
                {personList}
            </ul>
        );
    }
}

class Exercise1q2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer: []
        };
    }

    getListCustomers = function () {
        const baseURL = `https://localhost:8080`;
        Axios.get(`${baseURL}/api/v1/customers/`)
            .then(response => {
                this.setState({
                    customer: response.data
                });
            })
            .catch(error => console.log(error));
    }
    componentDidMount() {
        this.getListCustomers();
    }
    render() {
        const listCustomer = this.state.customer.map(
            customer =>
                <li >
                   {customer.customerName}
                </li>
        );
        return (
            <ul>
                {listCustomer}
            </ul>
        );
    }
}





function VD(){

}


export default {Exercise1q1,Exercise1q2, VD}