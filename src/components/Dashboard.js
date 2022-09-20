import React from 'react'
import UserAuth from './UserAuth'
import SpotifyWebApi from 'spotify-web-api-node';
import {useState, useEffect} from 'react';

const spotifyApi = new SpotifyWebApi({
  clientId: "de0242264777412ea8c3adc7e7c63029",
})

export default function Dashboard({code}) {
    const accessToken = UserAuth(code)

    useEffect(() => {
      if (!accessToken) return
      spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    return (
        <div>
          <h1>This is totally working</h1>
          <div>
            {accessToken}
          </div>
          
        </div>
  )
}
