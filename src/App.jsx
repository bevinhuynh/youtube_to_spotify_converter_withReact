import 'bootstrap/dist/css/bootstrap.min.css';
import Conversion from './Converting';
import { useState } from 'react'
import oAuth from '../frontend_functions/getting_backend_info'
import './App.css'

function App() {
  const button_name = "Convert Playlist";
  const [spotify_auth, SetSpotifyAuth] = useState("Unauthorized...")
  const [yt_auth, SetYTAuth] = useState("Unauthorized...")

  return (
    <>
        <div className="container-fluid" id="header">  
            <div className="row"> 
              <div className="col" id="youtube-spotify">
                <img src="../src/assets/youtube-name.svg" className="yt_name_logo" alt="YouTube logo" />
                <img src="../src/assets/right-arrow.svg" className="right_arrow_logo" alt="Arrow" />
                <img src="../src/assets/spotifyname.svg" className="spotify_name_logo" alt="Spotify logo" />
              </div>
              <div className="col" id="name-github">
                <h1 className='my_name'>By Bevin Huynh</h1>
                <a href="https://github.com/bevinhuynh/youtube_to_spotify_converter_withReact">
                  <img src="../src/assets/githublogo.svg" className="githublogo" alt="GitHub logo" />
                </a>
              </div>
            </div>
        </div>

      <div className='container-fluid' id="row1">
        <div className = "row">
          <div className="col" id="description">
            <div className="row">
              <h1 className='yts_title'>Youtube to Spotify Converter</h1>
            </div>
            <div className="row">
              <h2>This converter is a powerful tool that lets you convert</h2>
            </div>
            <div className="row">
              <h2>songs from your YouTube playlists to your Spotify</h2>
            </div>
            <div className="row">
              <h2>playlists.  All it takes are a few clicks!</h2>
            </div>
          </div>
          <div className='col' id="step1">
            <div className='row'>
              <h1 className='text-white'>STEP 1</h1>
            </div>
            <div className='row'>
              <img src="../src/assets/right-arrow.svg" className="right_arrow_step1"/>
            </div>
          </div>

          <div className='col' id="authorization">
            <div className='row'>
              <h2 id="auth_header">Click on the logos to authorize with both apps.</h2>
            </div>
            <div className='row'>
              <div className='col'>
                  <img src="../src/assets/spotifyLogo.svg" className="spotify_logo" onClick={oAuth.handle_authorization}/>
              </div>
              <div className='col'>
                <img src="../src/assets/youtubeLogo.svg" className="youtube_logo"onClick={oAuth.handle_youtube_authorization}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Conversion/>
   

      
      
    {/* <button className="auth_spotify" onClick={oAuth.handle_authorization}>Authorize with Spotify</button> <button className="auth_yt" onClick={oAuth.handle_youtube_authorization}>Authorize with YouTube</button> */}
      {/* <h2 className="subtitle" id="subtitle">{subtitle}</h2>
      <input className="input-box" placeholder='Paste here'></input>
      <div className="card">
        <button className="convert" onClick={async() => {
        setSubtitle("Converting...");
        setSubtitle(await oAuth.handle_playlist_creation())
        }}>
          {button_name}
        </button>
    </div> */}


    </>
  )
}

export default App
