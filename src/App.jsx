import { useState } from 'react'
import oAuth from '../frontend_functions/getting_backend_info'
import './App.css'

function App() {
  const button_name = "Convert Playlist";
  const [subtitle, setSubtitle] = useState("Please paste in a valid YouTube playlist link.")

  return (
    <>
      <div className='rectangle'>
        <div className='media-logos'>
          <img src="../src/assets/youtube-name.svg"className="yt_name_logo" alt="Vite logo" /> 
          <img src="../src/assets/right-arrow.svg" className="right_arrow_logo"/>
          <img src="../src/assets/spotifyname.svg" className="spotify_name_logo" alt="React logo" />
            <h1 className='my_name'>By Bevin Huynh</h1>
          <a href="https://github.com/bevinhuynh/youtube_to_spotify_converter_withReact">
            <img src = "../src/assets/githublogo.svg" className="githublogo"/>
          </a>
        </div>
      </div>


      <div className='title_description'>
        <div className='title'>
          <h1>Youtube to Spotify Converter</h1>
        </div>
        <h2 className="s1">This converter is a powerful tool that lets you convert songs</h2> 
        <h2 className='s2'>from your YouTube playlists to your Spotify Playlists.   All it</h2>
        <h2 className= "s3">takes is a couple of clicks!</h2>
      </div>
      
      <button className="auth_spotify" onClick={oAuth.handle_authorization}>Authorize with Spotify</button> <button className="auth_yt" onClick={oAuth.handle_youtube_authorization}>Authorize with YouTube</button>
      <h2 className="subtitle" id="subtitle">{subtitle}</h2>
      <input className="input-box" placeholder='Paste here'></input>
      <div className="card">
        <button className="convert" onClick={async() => {
        setSubtitle("Converting...");
        setSubtitle(await oAuth.handle_playlist_creation())
        }}>
          {button_name}
        </button>
      </div>


    </>
  )
}

export default App
