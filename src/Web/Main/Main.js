import '../../css/App.css';
import '../../css/flex.css';
import ListBai3 from '../../Bai3/ListBai3'
import ListBai4 from '../../Bai4/ListBai4'
import ListBai5 from '../../Bai5/ListBai5.js'
import ListBai6 from '../../Bai6/ListBai6.js'
import ListBai7 from '../../Bai7/ListBai7.js'
import ListBai8 from '../../Bai8/ListBai8.js'
import ListBai9 from '../../Bai9/ListBai9.js'
import ListBai10 from '../../Bai10/ListBai10.js'
import account from '../../CRUD/Component/account/account'
import displayTable from '../../CRUD/page/displayTable'
import error from '../../Bai6/error'
import home from '../../Bai6/home'
import React from 'react'
import { Switch, Link, Route } from "react-router-dom"


function Main() {
    return (
        <>
         <div className="main">
           
            <Switch>
              <Route path="/" component={home} exact></Route>
              <Route path="/bai3" component={ListBai3} exact></Route>
              <Route path="/bai3" component={ListBai3} exact></Route>
              <Route path="/bai4" component={ListBai4} exact></Route>
              <Route path="/bai5" component={ListBai5} exact></Route>
              <Route path="/bai6" component={ListBai6} exact></Route>
              <Route path="/bai7" component={ListBai7} exact></Route>
              <Route path="/bai8" component={ListBai8} exact></Route>
              <Route path="/bai9" component={ListBai9} exact></Route>
              <Route path="/bai10" component={ListBai10} exact></Route>
              <Route path="/account" component={account} exact></Route>
              <Route path="/table" component={displayTable} exact></Route>
              <Route component={error}></Route>
            </Switch>
          </div>
        </>
    )
}
export default Main