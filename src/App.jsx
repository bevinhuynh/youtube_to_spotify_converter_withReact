import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import click from '../frontend_functions/test';
import oAuth from '../frontend_functions/getting_backend_info'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [button_name, setName] = useState("Convert Playlist")

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Youtube to Spotify Converter</h1>

      <button className="auth_spotify" onClick={oAuth.handle_authorization}>Authorize with Spotify</button> <button className="auth_yt" onClick={oAuth.handle_youtube_authorization}>Authorize with YouTube</button>
      <h2 className="subtitle" id="subtitle">Please paste in a valid YouTube playlist link.</h2>
      <input className="input-box" placeholder='Paste here'></input>
      <div className="card">
        <button onClick={oAuth.handle_playlist_creation}>
          {button_name}
        </button>
      </div>

    </>
  )
}

export default App
