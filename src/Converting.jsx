import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import oAuth from '../frontend_functions/getting_backend_info'

function Conversion() {
    const [subtitle, setSubtitle] = useState("Please paste in a valid YouTube playlist link and convert!")
    const button_name = "Convert Playlist";
    let info = "Enter a playlist name and description";
    let sub_info = "(Or don't... up to you...)"
    return (
        <div className="container-fluid" id="step2andstep3">
            <div className="row">
                <div className="col-2" id="step2">
                    <div className="row">
                        <div className="col">
                            <h1 className='text-white'>STEP 2</h1>
                        </div>
                    <div className="row">
                        <div className="col">
                            <img src="../src/assets/right-arrow.svg" className="right_arrow_step1"/>
                        </div>
                    </div>
                </div>
            </div>
                
                <div className="col-2" id="playlist-elements">
                    <div className="row">
                        <h2 className="text-white" id="blurb">{info} {sub_info}</h2>
                    </div>
                    <div className="row">
                        <input className="playlistname-box" placeholder='Name here'></input>
                        <input className="playlistdesc-box" placeholder="Description here"></input>
                    </div>
                </div>
                <div className="col" id="step3">
                    <div className='row'>
                        <h1 className='text-white'>STEP 3</h1>
                    </div>
                    <div className='row'>
                        <img src="../src/assets/right-arrow.svg" className="right_arrow_step1"/>
                    </div>
                </div>

                <div className="col" id="converting-ui">
                    <div className="row">
                        <h2 className="text-white" id="subtitle">{subtitle}</h2>
                    </div>
                    <div className="row">
                        <input className="input-box" placeholder='Paste here'></input>
                    </div> 
                    <div className="row">
                    <button className="convert" onClick={async() => {
                        setSubtitle("Converting...");
                        setSubtitle(await oAuth.handle_playlist_creation())
                        }}>
                        {button_name}
                    </button>
                    </div>
                </div>

            </div>
        </div>
    )

}

export default Conversion