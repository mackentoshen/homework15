import React , { Component } from 'react';

import '../authorization/AuthorizationPage.css';
import Logo from '../../../assets/img/logo.png';
import Registration from '../../molecules/registr/Registration';
import Login from '../../molecules/login/Login';

class AuthorizationPage extends Component {

    constructor(props) {
        super(props);

        this.state= {
            tab: 'b'
        }
    }

    componentWillMount() {
        if (localStorage.getItem('checkUser')) {
            return (
                this.props.history.push('/')
            )
        }
    }

    tabChange = (value) => {
        this.setState({
            tab: value
        })
    };

    render() {
        return(
            <section className="Authorization-Wrap">
                <div className="Authorization-Form">
                    <header className="Authorization-Header">
                        <img src={Logo} alt="" />
                        <ul className="Authorization-Loginin">
                            <li className={this.state.tab === 'a' ? 'Active RegisterLink' : 'RegisterLink'} onClick={() => this.tabChange('a')}>Register</li>
                            <li className={this.state.tab === 'b' ? 'Active LoginLink' : 'LoginLink'} onClick={() => this.tabChange('b')}>Login</li>
                        </ul>
                    </header>
                    <div>
                        {this.state.tab === 'a' ?
                            <Registration /> : <Login />
                        }
                    </div>
                </div>
            </section>
        )
    }
}

export default AuthorizationPage;