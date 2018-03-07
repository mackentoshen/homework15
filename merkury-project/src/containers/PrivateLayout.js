import React, { Component } from 'react';
import { Route, Redirect} from 'react-router-dom';

//Component
import TopBar from "../components/organisms/topbar/TopBar";
import LeftBar from "../components/organisms/leftbar/LeftBar";

class PrivateLayout extends Component {

    render() {
        const {component: Component, ...rest} = this.props;
        return (
            <Route {...rest} render={() => {
                if (!localStorage.getItem('checkUser')) {
                    return <Redirect to="/login"/>
                }
                else if (localStorage.getItem('checkUser')) {
                    return (
                        <div>
                            <TopBar/>
                            <LeftBar/>
                            <Component/>
                        </div>
                    )
                }
            }}/>

        )
    };
}



export default PrivateLayout;