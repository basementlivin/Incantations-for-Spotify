import React from 'react';
import { useState, useEffect } from 'react'; 
import SpotifyWebApi from 'spotify-web-api-node';

export default function Playlist ({playlistId, accessToken}) {
    const [playlist, setPlaylist] = useState();

    useEffect( async () => {
        const spotifyApi = new SpotifyWebApi({
            clientId: "de0242264777412ea8c3adc7e7c63029",
            clientSecret: "3e44db334b744416b587c80314f5745f",
            accessToken: accessToken
        });
        await spotifyApi.getPlaylists(playlistId);
        setPlaylist(playlist);
    }, [playlistId])
    if(!playlistId) return <h1>loading</h1>
    return (
        <>
            <h1>Playlist</h1>
        </>
    )
}