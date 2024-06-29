import React from 'react'

function Buton(props) {
    const { style, children } = props
    return (
        <button className={`${style}`}>
            {children}
        </button>
    )
}

export default Buton
