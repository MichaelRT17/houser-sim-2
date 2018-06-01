import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { stepTwo } from '../../ducks/reducer';

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: ''
        }
    }

    componentDidMount() {
        this.setState({
            img: this.props.img
        })
    }

    handleClick() {
        this.props.stepTwo(this.state)
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Image URL</h3>
                    <input type='text' value={this.state.img} onChange={e => this.setState({ img: e.target.value })} />
                </div>
                <Link to='/wizard/step1' >
                    <button onClick={() => this.handleClick()}>Previous Step</button>
                </Link>
                <Link to='/wizard/step3' >
                    <button onClick={() => this.handleClick()}>Next Step</button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        img: state.img
    }
}

export default connect(mapStateToProps, { stepTwo })(Step2);