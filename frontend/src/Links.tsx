import { FC, useEffect, useState } from "react";
import { addLink, getSiteById } from "./helpers";
import { site, OneSite } from "./types";

export const Links: FC<OneSite> = (props: OneSite) => {
    const { links } = props;

    return (
        <div>
            <h2>
                {
                    props.name
                }
            </h2>
            <hr></hr>
            {
                links &&
                links.map(x => <h4>{x.name + ", " + x.location}</h4>)
            }
        </div>
    )
}