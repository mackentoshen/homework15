import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import 'font-awesome/css/font-awesome.min.css';

//components
import PrivateLayout from "./containers/PrivateLayout";
import Workflow from "./components/pages/Workflow";
import Statistics from "./components/pages/Statistics";
import Users from "./components/pages/Users";
import Settings from "./components/pages/Settings";
import Calendar from "./components/pages/Calendar";
import AuthorizationPage from "./components/pages/authorization/AuthorizationPage";
import Home from "./components/pages/Home";

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={AuthorizationPage}/>
                <PrivateLayout exact path="/" component={Home}/>
                <PrivateLayout exact path="/workflow" component={Workflow}/>
                <PrivateLayout exact path="/statistics" component={Statistics}/>
                <PrivateLayout exact path="/calendar" component={Calendar}/>
                <PrivateLayout exact path="/users" component={Users}/>
                <PrivateLayout exact path="/settings" component={Settings}/>
            </Switch>
        )
    }
}

export default App;
