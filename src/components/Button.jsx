
function Button(props) {
    const { style, children } = props
    return (
        <button className={`${style}`}>
            {children}
        </button>
    )
}

export default Button
