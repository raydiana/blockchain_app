import React, { Component } from 'react';

class Nav extends Component {
    render(){
        return (
            <nav className="navbar is-warning"  aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <strong><i className="fa fa-ship"></i> {this.props.appName}</strong>
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                        <a className="navbar-item ">
                            <div className="tags is-centered">

                                <span className="tag is-spaced">
                                    <i className="fa fa-shoe-prints"></i> &nbsp; Accueil
                                </span>

                                <span className="tag is-spaced">
                                    <i className="fas fa-shoe-prints"></i> &nbsp; Chaussures
                                </span>

                                <span className="tag is-spaced">
                                    <i className="fa fa-clock"></i> &nbsp; Vetements
                                </span>

                                <span className="tag is-spaced">
                                    <i className="fa fa-mobile-alt"></i> &nbsp; Autres
                                </span>
                            </div>
                        </a>
                    <div className="navbar-end">
                        <a className="navbar-item">
                            <div className="tags has-addons">
                                <span className="tag">
                                    &nbsp; Login </span>
                                <span className="tag is-success"><i className="fas fa-user-tag"></i></span>
                            </div>
                        </a>
                    </div>

            </nav>
        )
    }
}

export default Nav;
