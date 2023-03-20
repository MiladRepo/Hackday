import React, { FC, SyntheticEvent } from "react";

import { addSite } from "./helpers";
import { useRef } from "react";
import { site } from "./types";
import { Link } from "react-router-dom";

export const SiteForm: FC = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e : SyntheticEvent) =>{
        e.preventDefault();

        const obj : site = { name: nameRef.current?.value, description: descriptionRef.current?.value, location: locationRef.current?.value };
        addSite(obj);
        nameRef!.current!.value = '';
        locationRef.current!.value = '';
        descriptionRef.current!.value = '';
    }
    return (
        <>
        <div>
            <p>
            <Link to={'/search'}>Search</Link>
            <Link to={'/sites'}>Websites</Link>
            </p>
        </div>
        <hr></hr>
    <h2>Add Website</h2>
        <form method="post" onSubmit={submitHandler}>
            <div>
                <input className="button" ref={nameRef} placeholder={'enter website name'}></input>
            </div>
            <br></br>
            <div>
                <input ref={locationRef} placeholder={'enter website url'}></input>
            </div>
            <br></br>
            <div>
                <input ref={descriptionRef} placeholder={'enter website description'}></input>
            </div>
            <br></br>
            <button>Add</button>
        </form>
        </>
    )
}