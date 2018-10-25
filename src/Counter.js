import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from './actions'

export const Counter = ({ count, increment, decrement }) => {
    return (
        <div>
            <span className='counter'>{count}</span>
            <p>
                <button className='increment' onClick={() => increment(5)}> + </button>
                <button className='decrement' onClick={() => decrement(5)}> - </button>
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