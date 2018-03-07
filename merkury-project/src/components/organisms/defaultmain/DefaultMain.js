import React , { Component } from 'react';

import '../defaultmain/DefaultMain.css';

class DefaultMain extends Component {
    render() {
        return (
            <section className="Section-Wrap">
                <h2 className="Section-Title">{this.props.title}</h2>
            </section>
        )
    }
}

export default DefaultMain;