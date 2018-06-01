import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { stepTwo } from '../../ducks/reducer';

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: ''
        }
    }

    componentDidMount() {
        this.setState({
            imageUrl: this.props.imageUrl
        })
    }

    handleClick() {
        this.props.stepTwo(this.state.imageUrl)
    }

    render() {
        return (
            <div>
                <div>
                    <h3>Image URL</h3>
                    <input type='text' value={this.state.imageUrl} onChange={e => this.setState({ imageUrl: e.target.value })} />
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
        imageUrl: state.imageUrl
    }
}

export default connect(mapStateToProps, { stepTwo })(Step2);