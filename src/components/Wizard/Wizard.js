import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wizard from './wizardRoutes';

class Wizard extends Component {
    render() {

        return (
            <div>
                <h1>Add New Listing</h1>
                <Link to='/' >
                    <button>Cancel</button>
                </Link>
                {wizard}
            </div>
        )
    }
}

export default Wizard;