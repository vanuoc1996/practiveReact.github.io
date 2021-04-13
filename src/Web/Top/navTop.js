import '../../css/App.css';
import '../../css/flex.css';
import '../../css/home.css';
import React from 'react'
import { Switch, NavLink, Route, Link } from "react-router-dom"
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function NavTop() {
    return (
        <>
            <div className="menuHome">
                <NavLink to="/" >
                    <img src="img/logo.png" className="logoHome" />
                </NavLink>
                <div className="dropdown">
                    <bottom className="dropbtn"><MenuIcon style={{ fontSize: 40 }} /></bottom>
                    <div className="dropdown-content">
                        <Link to="/bai3" className="ListBT">Bai3:</Link><br /><br /><br />
                        <Link to="/bai4" className="ListBT">Bai4</Link><br /><br /><br />
                        <Link to="/bai5" className="ListBT">Bai5</Link><br /><br /><br />
                        <Link to="/bai6" className="ListBT">Bai6</Link><br /><br /><br />
                        <Link to="/bai7" className="ListBT">Bai7</Link><br /><br /><br />
                        <Link to="/bai8" className="ListBT">Bai8</Link><br /><br /><br />
                        <Link to="/bai9" className="ListBT">Bai9</Link><br /><br /><br />
                        <Link to="/bai10" className="ListBT">Bai10</Link><br /><br /><br />
                    </div>
                </div>

                <div className="menuHomeRight">
                    <NavLink to="/5" className="iconTop"><NotificationsIcon style={{ fontSize: 40 }} /></NavLink>
                    <NavLink to="/5" className="iconTop"><AccountCircleIcon style={{ fontSize: 40 }} /></NavLink>
                    <NavLink to="/5" className="iconTop"><b>Manager</b></NavLink>
                    <NavLink to="/5" className="iconTop"><ArrowDropDownIcon style={{ fontSize: 40 }} /></NavLink>
                </div>

            </div>
        </>
    )
}
export default NavTop