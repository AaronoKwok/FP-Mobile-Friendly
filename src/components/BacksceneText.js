import React from "react"  
import {Link} from "react-router-dom"

import useWindowWidth from "../hooks/useWindowWidth"

import wave from "../images/wave.png"  

function BacksceneText() {
    return (
        <div>
            {
                (useWindowWidth()) &&
                <div className="backscene-text">
                    <img className="wave" src={wave} alt=""/>
                    <h1 className="image-h1">The most consistent surf spots on earth.</h1>
                </div>
            }
            {
                (!useWindowWidth()) &&
                <div className="backscene-text">
                    <img className="wave" src={wave} alt=""/>
                    <div>
                        <h1 className="image-h1 image-h1-margin">The most consistent surf</h1>
                        <h1 className="image-h1">spots on earth.</h1>
                    </div>
                    <p className="description-on-backscene">Retreats only occur during optimal surf seasons for your level.</p>
                    <div className="backscene-links">
                        <Link className="link-loc" to="/surfRetreats/costarica-retreat">Costa Rica</Link>
                        <Link className="link-loc" to="/surfRetreats/nicaragua-retreat">Nicaragua</Link>
                        <Link className="link-loc" to="/surfRetreats/bali-retreat">Bali</Link>
                        <Link className="link-loc" to="/surfRetreats/intermediate/maldives-retreat">Mentawai</Link>
                        <Link className="link-loc" to="/surfRetreats/intermediate/mentawais-retreat">Maldives</Link>
                    </div>
                </div>
            }
        </div>
        
    )
}

export default BacksceneText