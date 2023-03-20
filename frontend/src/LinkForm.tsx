import React, { FC, SyntheticEvent, useEffect, useState } from "react";

import { addLink, getSiteById } from "./helpers";
import { useRef } from "react";
import { link, OneSite, Site } from "./types";
import { Links } from "./Links";
import { Link } from "react-router-dom";

export const LinkForm: FC = () => {
    const nameRef = useRef<HTMLInputElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const [sites, setSites] = useState<OneSite>();

    const siteId = parseInt(window.location.href.split('=')[1]);

    useEffect(() => {
        getSiteById(siteId).then(x => setSites(x))
    }, [])

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();

        const obj: link = { name: nameRef.current?.value, location: locationRef.current?.value };
        addLink(siteId, obj);
        setTimeout(() => {
            getSiteById(siteId).then(x => setSites(x))
        }, 100);
        nameRef!.current!.value = '';
        locationRef.current!.value = '';
    }

    return (
        <div>
            <div>
                <p><Link to={'/search'}>Search</Link></p>
                <hr></hr>
            </div>
            <h2>Add sublink</h2>
            <form method="post" onSubmit={submitHandler}>
                <div>
                    <input className="button" ref={nameRef} placeholder={'enter Sublink name'}></input>
                </div>
                <br></br>
                <div>
                    <input ref={locationRef} placeholder={'enter sublink url'}></input>
                </div>
                <br></br>
                <button>Add</button>
            </form>
            {
                sites &&
                <Links name={sites.name} links={sites.links} />
            }
        </div>
    )
}