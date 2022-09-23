import React from 'react';
import { useState, useEffect } from 'react'; 
import SpotifyWebApi from 'spotify-web-api-node';

export default function Playlist ({playlistId, accessToken}) {
    const [playlist, setPlaylist] = useState("");
    const fetchData = async () => {
        if(!playlistId) return null;
        const spotifyApi = new SpotifyWebApi({
            clientId: "de0242264777412ea8c3adc7e7c63029",
            clientSecret: "3e44db334b744416b587c80314f5745f",
            accessToken: accessToken
        });
        const data = await spotifyApi.getPlaylist(playlistId);
        console.log('data: ', data);
        setPlaylist(data.body.name);
        console.log('set playlist to: ', playlist);
    }
    useEffect(() => {
        fetchData();
    }, [playlistId])
    if(!accessToken) return null
    return (
        playlist ? <h1>{playlist}</h1> : <h1>waiting for spell</h1>
        
    )
}