const Theme = {
    primary: "blue",
    secondary: "yellow",
    error: "red",
    outline: "none"
}

function Button({ label, appearance, textColor="white" }) {
    return <button style={{
        backgroundColor: `${Theme[`${appearance}`]}`,
        padding: "10px 20px",
        outline: 0,
        border: "none",
        color: textColor,
        borderRadius: "3px",
        minWidth: "100px"
    }}>{label}</button>
}

export default Button;
