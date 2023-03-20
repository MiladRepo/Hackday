import { SyntheticEvent, useEffect, useRef } from "react"
import { Link } from "react-router-dom";

export const Start = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        window.localStorage.setItem("name", inputRef.current!.value);
    }
    return (
        <div>
            <h4>Hi, type in your name:</h4>
            <input ref={inputRef} placeholder="enter your name"></input>
            <Link className="a" onClick={handleSubmit} to={'/search'}>Proceed</Link>
        </div>
    )
}