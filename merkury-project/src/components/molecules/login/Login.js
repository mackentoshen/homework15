import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {withRouter} from 'react-router-dom';
import '../login/Login.css';
import SubmitEButton from "../../atoms/buttons/SubmitEButton";

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            open: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let userData = {
            login: this.state.username.trim(),
            pass: this.state.password.trim()
        };

        fetch('/api/user', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(userData),
        })
            .then(res => res.json())
            .then(res => {
                if (res.check) {
                    JSON.stringify(localStorage.setItem("checkUser", res.check));
                    localStorage.setItem("user", JSON.stringify(res.username));
                    this.props.history.push('/')
                } else {
                    this.setState({
                        username: '',
                        password: '',
                        open: true
                    });
                }
            });
    };

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    };

    render() {
        return (
            <MuiThemeProvider>
                <div className="Login-Wrap">
                    <h3 className="Login-Title">Welcome <span>back!</span></h3>
                    <form className="Login-Form" onSubmit={this.handleSubmit}>
                        <input className="LoginField" name="username" type="text" placeholder="Username"
                               value={this.state.username} onChange={this.handleChange} required/>
                        <input className="PasswordField" name="password" type="password" placeholder="Password"
                               value={this.state.password} onChange={this.handleChange} required/>
                        <SubmitEButton/>
                        <Snackbar
                            open={this.state.open}
                            message="There was an error with your Login/Password combination. Please try again!"
                            autoHideDuration={2000}
                            onRequestClose={this.handleRequestClose}
                            className="Snack-Bar"
                        />
                    </form>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default withRouter(Login);