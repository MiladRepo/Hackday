import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { delSite, getSites } from "./helpers";
import { Site } from "./types"

export const Sites: FC = () => {
  const [sites, setSites] = useState<Site>([]);

  useEffect(() => {
    getSites().then(x => setSites(x))
  }, [])

  return (
    <>
      <div>
        <p><Link to={'/search'}>Search</Link></p>
      </div>
      <hr></hr>
      <h2>Websites</h2>
      {
        sites.length > 0 ?
        sites.map(x => (
          <div>
            <div>
              <div>
                <Link className="a" to={`/addlink?id=${x.id}`}>{x.name}</Link>
                <button className="red" onClick={() => {
                  delSite(x.id)
                  setTimeout(() => {
                    getSites().then(x => setSites(x))
                  }, 100);
                }}>Delete</button>
              </div>
              <br></br>
            </div>
          </div>)):
          <h3>Loading...</h3>
      }
    </>
  )
}