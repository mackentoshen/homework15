import React, { Component } from 'react';

import Avatar from '../../../assets/img/avatar.png';
import '../avatar/Avatar.css';

class AvatarUser extends Component{
    render(){
        return(
            <div className="AvatarWrap">
                <img src={ Avatar } alt=""/>
            </div>
        )
    }
}

export default AvatarUser;