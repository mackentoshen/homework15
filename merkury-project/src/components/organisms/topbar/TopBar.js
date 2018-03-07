import React , { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../topbar/TopBar.css';

//Components
import ButtonAddProjects from '../../atoms/buttons/ButtonAddProjects';
import ButtonSearch from "../../atoms/buttons/ButtonSearch";
import AvatarUser from "../../atoms/avatar/Avatar";
import Logo from '../../../assets/img/logo.png';
import Notification from '../../../assets/img/Notifications.png';



class TopBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleOpen = (event) => {
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleClose = () => {
        this.setState({
            open: false,
        });
    };

    handleLogOut = () => {
        localStorage.clear();
        this.props.history.push("/login")
    };


    render() {
        return (
            <MuiThemeProvider>
                <header className="TopNavMenu">
                    <div className="Logo">
                        <img src={ Logo } alt="Logo"/>
                    </div>
                    <div className="LeftColumn FlexWrapCenter">
                        <button className="BurgerButton"></button>
                        <ButtonSearch/>
                    </div>
                    <div className="RightColumn FlexWrapCenter">
                        <ButtonAddProjects />
                        <a className="MessagesIcon">
                            <i className="fas fa-envelope"></i>
                        </a>
                        <a className="Notification">
                            <img src={ Notification } alt="" />
                        </a>
                        <div className="UserMenu">
                            <AvatarUser/>
                            <button className="DropButton"
                                    onClick={this.handleOpen}>
                            </button>
                            <Popover
                                open={this.state.open}
                                anchorEl={this.state.anchorEl}
                                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                                onRequestClose={this.handleClose}
                                animation={PopoverAnimationVertical}
                            >
                                <Menu>
                                    <MenuItem onClick={this.handleLogOut} primaryText="Log out"/>
                                </Menu>
                            </Popover>
                        </div>
                    </div>
                </header>
             </MuiThemeProvider>
        )
    }
}

export default withRouter(TopBar);