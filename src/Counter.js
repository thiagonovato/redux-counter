import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './actions'

const Counter = ({ count, increment, decrement }) => {
    return (
        <div>
            <p>Contador: {count}</p>
            <p>
                <button onClick={() => increment(5)}> + </button>
                <button onClick={() => decrement(5)}> - </button>
            </p>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)