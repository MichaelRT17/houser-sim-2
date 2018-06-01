import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { stepOne } from '../../ducks/reducer';

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name,
            address: this.props.address,
            city: this.props.city,
            state: this.props.state,
            zipcode: this.props.zipcode
        })
    }

    handleClick() {
        this.props.stepOne(this.state)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    <h3>Property Name</h3>
                    <input type='text' value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                    <h3>Address</h3>
                    <input type='text' value={this.state.address} onChange={e => this.setState({ address: e.target.value })} />
                    <h3>City</h3>
                    <input type='text' value={this.state.city} onChange={e => this.setState({ city: e.target.value })} />
                    <h3>State</h3>
                    <input type='text' value={this.state.state} onChange={e => this.setState({ state: e.target.value })} />
                    <h3>Zipcode</h3>
                    <input type='number' value={this.state.zipcode} onChange={e => this.setState({ zipcode: e.target.value })} />
                </div>
                <Link to='/wizard/step2' >
                    <button onClick={() => this.handleClick()}>Next Step</button>
                </Link >
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
        zipcode: state.zip
    }
}

export default connect(mapStateToProps, { stepOne })(Step1);