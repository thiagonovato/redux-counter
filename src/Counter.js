import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './actions'

class Counter extends Component {
    render() {
        return (
            <div>
                <p>Contador: {this.props.count}</p>
                <p>
                    <button onClick={this.props.increment}> + </button>
                    <button onClick={this.props.decrement}> - </button>
                </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment),
        decrement: () => dispatch(decrement)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)