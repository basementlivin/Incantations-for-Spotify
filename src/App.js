import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import UserPlaylists from './components/UserPlaylists';
import { Routes, Route } from 'react-router-dom'
import UserAuth from './components/UserAuth';
import SpotifyWebApi from 'spotify-web-api-node';



const code = new URLSearchParams(window.location.search).get('code')
//const accessToken = UserAuth(code)

function App() {
      //const accessToken = UserAuth(code)
//       const spotifyApi = new SpotifyWebApi({
//       clientId: "de0242264777412ea8c3adc7e7c63029",
//       clientSecret: "3e44db334b744416b587c80314f5745f",
//       accessToken: accessToken
//     })
    //console.log(accessToken)

      //return code ?  <Main code={code} /> : <Login />
      return ( 
            code ?
            <Routes>
                  <Route path="/" element={<Dashboard code={code}/>}/>
                  <Route path="/playlists" element={<UserPlaylists />}/>
            </Routes>
            : 
            <Login />
)
}

export default App;