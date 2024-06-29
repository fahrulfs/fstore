import React from 'react'

function Buton(props) {
    const { classname, children } = props
    return (
        <button className={`${classname}`}>
            {children}
        </button>
    )
}

export default Buton
