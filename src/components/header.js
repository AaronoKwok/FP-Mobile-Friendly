import React, {useState, useContext} from "react" 
import {Link} from "react-router-dom"

import Logo from "./Logo"
import githubSVG from "../images/github.svg"
import linkedinSVG from "../images/linkedin.svg" 

import locationData from "../Data/locationData.json"

 
function Header() {

    const usaState = locationData[0].globe.northAmerica.country.unitedStates.state

    const pleasurePoint = usaState.california.county.santaCruz[0].name;
    const jacks = usaState.california.county.santaCruz[1].name;
    const cowells = usaState.california.county.santaCruz[2].name;
    const steamer = usaState.california.county.santaCruz[3].name;
    const theHook = usaState.california.county.santaCruz[4].name;
    const capitola = usaState.california.county.santaCruz[5].name;
    const davenport = usaState.california.county.santaCruz[6].name;
    const pacifica = usaState.california.county.sanMateo[0].name;
    const hbPier = usaState.california.county.orange[0].name;
    const waikiki = usaState.hawaii.county.oahu[0].name


    return (
        <header>

            <nav>
                <Logo />

                <section className="white-in-nav">

                    {/* Four Dropdowns */}
                    <div className="nav-dropdown">
                        <p className="nav-button">SURF RETREATS &nbsp;<i className="arrow down"></i></p>

                        <span className="dropdown-section">

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">MAIN COACHING RETREATS</p>
                                <hr className="hr-dropdown"/> 

                                <Link className="dropdown-link" to="/costarica-retreat">
                                    <p className="dropdown-info">COSTA RICA | 7 DAYS</p>
                                </Link>
                                <Link className="dropdown-link" to="/nicaragua-retreat">
                                    <p className="dropdown-info">NICARAGUA | 7 DAYS</p>
                                </Link>
                                <Link className="dropdown-link" to="/bali-retreat">
                                    <p className="dropdown-info">BALI | 10 DAYS</p>
                                </Link> 
                            </div>

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">INTERMEDIATE ONLY TRIPS</p>
                                <hr className="hr-dropdown"/>
                                
                                <Link className="dropdown-link" to="/maldives-retreat">
                                    <p className="dropdown-info">MALDIVES | OCTOBER</p>
                                </Link>
                                <Link className="dropdown-link" to="/mentawais-retreat">
                                    <p className="dropdown-info">MENTAWAIS | NOVEMBER</p>
                                </Link> 
                            </div>

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">MORE INFO</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/surf-trip-calendar">
                                    <p className="dropdown-info">SURF TRIP CALENDAR</p>
                                </Link>
                            </div>

                        </span>

                    </div> 

                    <div className="nav-dropdown">

                        <p className="nav-button">SURF FORECASTS &nbsp;<i className="arrow down"></i></p>

                        <span className="dropdown-section"> 
                            <Link to="/surfForecasts/pleasurePoint">
                                <p>{pleasurePoint}</p>
                            </Link>
                            <Link to="/surfForecasts/waikiki">
                                <p>{waikiki}</p>            
                            </Link>
                            <Link to="/surfForecasts/jacks">
                                <p>{jacks}</p>
                            </Link>
                            <Link to="/surfForecasts/cowells">
                                <p>{cowells}</p>
                            </Link>
                            <Link to="/surfForecasts/steamer">
                                <p>{steamer}</p>
                            </Link>
                            <Link to="/surfForecasts/theHook">
                                <p>{theHook}</p>
                            </Link>
                            <Link to="/surfForecasts/capitola">
                                <p>{capitola}</p>
                            </Link>
                            <Link to="/surfForecasts/davenport">
                                <p>{davenport}</p>
                            </Link>
                            <Link to="/surfForecasts/pacifica">
                                <p>{pacifica}</p>
                            </Link>
                            <Link to="/surfForecasts/hbPier">
                                <p>{hbPier}</p>
                            </Link>
                        </span>

                    </div>

                    <div className="nav-dropdown">
            
                        <p className="nav-button">PRODUCTS &nbsp;<i className="arrow down"></i></p>

                        <span className="dropdown-section"> 

                            
                        </span>

                    </div>

                    <div className="nav-dropdown">
                        <p className="nav-button">ABOUT &nbsp;<i className="arrow down"></i></p>

                        <span className="dropdown-section"> 

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">OUR COMPANY</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/team">
                                    <p className="dropdown-info">TEAM</p>
                                </Link>
                                <Link className="dropdown-link" to="/what-we-do">
                                    <p className="dropdown-info">WHAT WE DO</p>
                                </Link>
                                <Link className="dropdown-link" to="/social-resonsibility">
                                    <p className="dropdown-info">SOCIAL RESPONSIBILITY</p>
                                </Link>
                            </div>

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">SURFING</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/is-this-trip-for-me">
                                    <p className="dropdown-info">IS THIS TRIP FOR ME?</p>
                                </Link>
                                <Link className="dropdown-link" to="/surfing-level">
                                    <p className="dropdown-info">WHAT IS MY SURF LEVEL?</p>
                                </Link>
                                <Link className="dropdown-link" to="/how-we-coach">
                                    <p className="dropdown-info">HOW DO WE COACH SURFING?</p>
                                </Link>
                            </div>

                            <div className="retreat-dropdown-content">
                                <p className="dropdown-title">RESOURCES</p>
                                <hr className="hr-dropdown"/>

                                <Link className="dropdown-link" to="/contact-us">
                                    <p className="dropdown-info">CONTACT US</p>
                                </Link>
                                <Link className="dropdown-link" to="/reservation-policy">
                                    <p className="dropdown-info">RESERVATION POLICY</p>
                                </Link>
                                <Link className="dropdown-link" to="/faq">
                                    <p className="dropdown-info">FAQ</p>
                                </Link>
                            </div>

                        </span>

                    </div>

                    <Link className="nav-link color-change" to="/onlineCourses">
                        <p className="nav-button">ONLINE COURSES</p>
                    </Link>
                    
                </section>

                    {/* <button onClick={changeAesthetic}></button>  */}

                <div>add tripad</div>

                <div className="socials">
                    <a className="gh" target="_blank" href="https://github.com/AaronoKwok" rel="noreferrer"><img src={githubSVG} alt=""></img></a>
                    <a className="lkn" target="_blank" href="https://www.linkedin.com/in/aaronkwok1/" rel="noreferrer"><img src={linkedinSVG} alt=""></img></a>
                </div> 

                    {/* <button>Login</button> */}
            </nav>

           
        </header>
    )
}

export default Header