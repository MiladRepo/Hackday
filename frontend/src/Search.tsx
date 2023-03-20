import { SyntheticEvent, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { delSite, getSites, getSitesByQ } from "./helpers"
import { Site } from "./types"

export const Search = () => {
    const [sites, setSites] = useState<Site>([])
    const queryRef = useRef<HTMLInputElement>(null);
    const outputRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{

    }, [])

    const submitHandler = async (e: SyntheticEvent) => {
        e.preventDefault();
        if (!queryRef.current?.value) {
            outputRef.current?.classList.add('hide');
            setSites([]);
            return;
        }

        await getSitesByQ(queryRef.current!.value).then(x => setSites(x))
        outputRef.current?.classList.remove('hide');
    }
    return (
        <div className="center">
            <div>
                <p>
                    <Link to="/addsite">Add website</Link>
                    <Link to="/sites">Websites</Link>
                </p>
            </div>
            <hr></hr>
            <br></br>
            <br></br>
            <div>
                <h2>Good day, { window.localStorage.getItem("name") }</h2>
            </div>
            <div>
                <h1 className="moogle">Moogle</h1>
                <form action="get" onSubmit={submitHandler}>
                    <input placeholder="Moogle something" ref={queryRef}></input>
                    <button>Search</button>
                </form>
            </div>
            <br></br>
            <div ref={outputRef} className="hide">
                <h3>Total Results: {sites && sites.length}</h3>
            </div>
            <div className="results">
                {
                    sites &&
                    sites.map(x => (<div className="results"><Link className="a" to={'/result'}>{x.name} - {x.location}</Link><span className="desc">{x.description}</span>
                        <div>
                            {x.links.map(o => <Link to={'/result'}>{o.name}</Link>)}
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}