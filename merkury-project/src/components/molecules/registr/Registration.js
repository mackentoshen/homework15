import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../registr/Registration.css';
import SubmitEButton from "../../atoms/buttons/SubmitEButton";

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            open: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let userdatebase = {
            username : this.state.username,
            password : this.state.password
        };

        fetch('/api/user' , {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(userdatebase),
        });


        this.setState({
            username: '',
            password: '',
            open: true
        })
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
                <div className="Registration-Wrap">
                    <h2 className="Registration-Title">Sign up, it's <span> FREE! </span></h2>
                    <form className="Registration-Form" onSubmit={this.handleSubmit}>
                        <input className="LoginField" name="username" type="text" placeholder="Username"
                               value={this.state.username} onChange={this.handleChange} required/>
                        <input className="PasswordField" name="password" type="password" placeholder="Password"
                               value={this.state.password} onChange={this.handleChange} required/>
                        <SubmitEButton/>
                        <Snackbar
                            open={this.state.open}
                            message="The registration was successfully"
                            autoHideDuration={3500}
                            onRequestClose={this.handleRequestClose}
                            className="SnackBarStyle"
                        />
                    </form>
                </div>
            </MuiThemeProvider>
        )
    }
}
export default withRouter(Registration);