import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import House from '../House/House';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            houses: []
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount() {
        axios.get('/api/houses').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/deleteHouse/${id}`).then(res => {
            this.componentDidMount()
        })
    }

    render() {
        let mappedHouses = this.state.houses.map((house) => {
            return (
                <House
                    key={house.id}
                    house={house}
                    deleteHouse={this.deleteHouse}
                />
            )
        })
        return (
            <div>
                <h1>Dashboard</h1>
                <Link to='/wizard/step1'>
                    <button>Add New Property</button>
                </Link>
                <hr />
                <h3>Home Listings</h3>
                {mappedHouses}
            </div>
        )
    }
}

export default Dashboard;