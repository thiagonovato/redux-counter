import React from 'react'
import { connect } from 'react-redux'

import { increment, decrement, zeraValor } from './actions'

export const Counter = ({ count, increment, decrement, zeraValor }) => {
    return (
        <div>
            <span className='counter'>{count}</span>
            <p>
                <button className='increment' onClick={() => increment(5)}> + </button>
                <button className='decrement' onClick={() => decrement(5)}> - </button>
                <button className='zera' onClick={() => zeraValor(0)}> Zerar </button>
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
        decrement: (value) => dispatch(decrement(value)),
        zeraValor: (value) => dispatch(zeraValor(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)