import React  from "react"
import {} from "./style"

const SearchBar = () => {

	const [input, setInput] = React.useState("")

    const handleChange = (ev) => {
        setInput(ev.target.value)
    }

    const handleClick = async (ev) => {
        ev.preventDefault()
    }

    return (
        <React.Fragment>
           <input type="text" name="name" value={input} onChange={ev => handleChange(ev)}></input>
           <button onClick={ev => handleClick(ev)}>Valid</button>
        </React.Fragment>
    )

}

export default SearchBar