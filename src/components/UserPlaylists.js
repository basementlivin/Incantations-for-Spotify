import React from 'react';
import { useEffect } from 'react';
import UserAuth from './UserAuth';
import SpotifyWebApi from 'spotify-web-api-node';

export default function UserPlaylists({ code }) {
    const accessToken = UserAuth(code)
    const spotifyApi = new SpotifyWebApi({
      clientId: "de0242264777412ea8c3adc7e7c63029",
    })

    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
      }, [accessToken])
    
    return(
        <h1>User Playlists</h1>
    )
}