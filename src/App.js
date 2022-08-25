import React from "react"
import {Routes, Route} from "react-router-dom" 

import SurfForecasts from "./pages/SurfForecasts"
import Shop from "./pages/Shop"
import OnlineCourses from "./pages/OnlineCourses"
import Header from "./components/header"
import MainPage from "./pages/MainPage"
import Footer from "./components/Footer"

import locationData from "./Data/locationData.json"


function App() {

    const usaState = locationData[0].globe.northAmerica.country.unitedStates.state

    const pleasurePoint = usaState.california.county.santaCruz[0];
    const jacks = usaState.california.county.santaCruz[1]
    const cowells = usaState.california.county.santaCruz[2]
    const steamer = usaState.california.county.santaCruz[3]
    const theHook = usaState.california.county.santaCruz[4]
    const capitola = usaState.california.county.santaCruz[5]
    const davenport = usaState.california.county.santaCruz[6]
    const pacifica = usaState.california.county.sanMateo[0]
    const hbPier = usaState.california.county.orange[0]
    const waikiki = usaState.hawaii.county.oahu[0];
    

    return (
        <div>
            <Header /> 
           
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/surfForecasts">
                    <Route path="/surfForecasts/pleasurePoint" element={<SurfForecasts loc={pleasurePoint}/>} />
                    <Route path="/surfForecasts/waikiki" element={<SurfForecasts loc={waikiki}/>} />
                    <Route path="/surfForecasts/jacks" element={<SurfForecasts loc={jacks}/>} />
                    <Route path="/surfForecasts/cowells" element={<SurfForecasts loc={cowells}/>} />
                    <Route path="/surfForecasts/steamer" element={<SurfForecasts loc={steamer}/>} />
                    <Route path="/surfForecasts/theHook" element={<SurfForecasts loc={theHook}/>} />
                    <Route path="/surfForecasts/capitola" element={<SurfForecasts loc={capitola}/>} />
                    <Route path="/surfForecasts/davenport" element={<SurfForecasts loc={davenport}/>} />
                    <Route path="/surfForecasts/pacifica" element={<SurfForecasts loc={pacifica}/>} />
                    <Route path="/surfForecasts/hbPier" element={<SurfForecasts loc={hbPier}/>} />
                </Route> 
                <Route path="/shop" element={<Shop />} />
                <Route path="onlineCourses" element={<OnlineCourses />} />
            </Routes>

            <Footer />
            
        </div>
    )
}

export default App