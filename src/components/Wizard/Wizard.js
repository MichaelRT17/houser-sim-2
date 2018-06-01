import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wizard from './wizardRoutes';
import { connect } from 'react-redux';
import { cancel } from '../../ducks/reducer';

class Wizard extends Component {

    handleClick() {
        this.props.cancel()
    }

    render() {

        return (
            <div>
                <h1>Add New Listing</h1>
                <Link to='/' >
                    <button onClick={() => this.handleClick()}>Cancel</button>
                </Link>
                {wizard}
            </div>
        )
    }
}

export default connect(null, { cancel })(Wizard);