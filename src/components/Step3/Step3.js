import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepThree } from '../../ducks/reducer';

class Step3 extends Component {
    constructor() {
        super();

        this.state = {
            mortgage: 0,
            rent: 0,
            recommendedRent: 0,
            redirect: false
        }
    }

    componentDidMount() {
        this.setState({
            mortgage: this.props.mortgage,
            rent: this.props.rent
        })
    }

    mortgageAndRecommended(input) {
        this.setState({
            mortgage: input,
            recommendedRent: input * 1.25
        })
    }

    newHouse() {
        axios.post('/api/createHouse', {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zipcode
        })
            .then(() => this.setState({
                redirect: true
            }))
    }

    handleClick() {
        this.props.stepThree(this.state)
    }

    render() {
        console.log(this.props)
        if (this.state.redirect) {
            return (
                <Redirect to='/' />
            )
        }
        return (
            <div>
                <div>
                    <h4>Recommended Rent: ${this.state.mortgage * 1.25}</h4>
                    <h3>Monthly Mortgage Amount</h3>
                    <input type='number' value={this.state.mortgage} onChange={e => this.mortgageAndRecommended(e.target.value)} />
                    <h3>Desired Monthly Rent</h3>
                    <input type='number' value={this.state.rent} onChange={e => this.setState({ rent: e.target.value })} />
                </div>
                <Link to='/wizard/step2' >
                    <button onClick={() => this.handleClick()}>Previous Step</button>
                </Link>
                <button onClick={() => this.newHouse()}>
                    Complete</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip,
        imageUrl: state.imageUrl,
        mortgage: state.mortgage,
        rent: state.rent
    }
}

export default connect(mapStateToProps, { stepThree })(Step3);