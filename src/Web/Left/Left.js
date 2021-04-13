import '../../css/App.css';
import '../../css/flex.css';
import React from 'react'
import { Switch, NavLink, Route } from "react-router-dom"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HouseIcon from '@material-ui/icons/House';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import MenuIcon from '@material-ui/icons/Menu';

function left() {
    return (
        <>
            <div className="controller">
                <div className="drirexConten">
                    <NavLink title="trang cá nhân" to="/1" className="drirex"><AccountCircleIcon style={{ fontSize: 50 }} /></NavLink>
                    <NavLink title="trang chủ" to="/" className="drirex"><HouseIcon style={{ fontSize: 40 }} /></NavLink>
                    <NavLink title="Cá nhân" to="/account" className="drirex"><PersonIcon style={{ fontSize: 40 }} /></NavLink>
                    <NavLink to="/table" className="drirex"><PeopleIcon style={{ fontSize: 40 }} /></NavLink>
                    <NavLink to="/5" className="drirex"><MenuIcon style={{ fontSize: 40 }} /></NavLink>
                    {/* <NavLink to="/bai3" className="drirex">Bai3</NavLink>
            <NavLink to="/bai4" className="drirex">Bai4</NavLink>
            <NavLink to="/bai5" className="drirex">Bai5</NavLink>
            <NavLink to="/bai6" className="drirex">Bai6</NavLink> */}

                </div>
            </div>
        </>
    )
}
export default left