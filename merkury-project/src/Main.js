import React , { Component } from 'react';
import { Route } from 'react-router-dom';

//components
import Home from "./components/pages/Home";
import Workflow from "./components/pages/Workflow";
import Statistics from "./components/pages/Statistics";
import Calendar from "./components/pages/Calendar";
import Users from "./components/pages/Users";
import Settings from "./components/pages/Settings";
import AuthorizationPage from "./components/pages/authorization/AuthorizationPage";


class Main extends Component {
    render(){
        return(
            <div>
                <Route exact path="/" component={ Home } />
                <Route exact path="/workflow" component={ Workflow } />
                <Route exact path="/statistics" component={ Statistics } />
                <Route exact path="/calendar" component={ Calendar } />
                <Route exact path="/users" component={ Users } />
                <Route exact path="/settings" component={ Settings } />
                <Route exact path="/login" component={ AuthorizationPage } />
            </div>
        )
    }
}

export default Main;
