import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {signOut} from "../../store/actions/authActions";

const SignedInLinks = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/create">New Article</NavLink></li>
            <li><a onClick={props.signOut}>Sign Out</a></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">{props.profile.initials}</NavLink></li>
        </ul>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(null, mapDispatchToProps)(SignedInLinks);