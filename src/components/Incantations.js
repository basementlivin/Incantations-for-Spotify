import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useState, useEffect } from 'react';
import Playlist from './Playlist';
import { Link } from 'react-router-dom';



export default function Incantations ({accessToken}) {
    const [form, setForm] = useState("");
    //const [playlist, setPlaylist] = useState([]);
    const [link, setLink] = useState('');


    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    let playlistData = [];
    const handleSubmit = async (e, ) => {
        e.preventDefault();
        let spotifyApi;
        const incantation = {...form};
        let tracks = [];
        let id = '';
        const keyWords = incantation.incantation.split(" ");
        try {
            spotifyApi = new SpotifyWebApi({
                clientId: "de0242264777412ea8c3adc7e7c63029",
                clientSecret: "3e44db334b744416b587c80314f5745f",
                accessToken: accessToken
            });
            const data = await spotifyApi.createPlaylist(`${incantation.incantation}`, {
                'description': 'Created over a piping hot cauldron with the incantations for spotify app🪄', 
                'public': 'true',
            });
            id = data.body.id;
            setLink(incantation.incantation);
        } catch(err) {
            console.log(err);
        }
        try {
            keyWords.map(async (word) => {
               let data = await spotifyApi.searchTracks(`${word}`);
                for(let i = 0; i < data.body.tracks.items.length; i++) {
                tracks.push(data.body.tracks.items[i].uri);
                //playlistData.push(data.body.tracks.items[i]);
               }
               spotifyApi.addTracksToPlaylist(id, tracks);
        })
        } catch(err) {
            console.log(err)
        }
        // try {
        //     setPlaylist(playlistData);
        // } catch(err) {
        //     console.log(err)
        // }
    }
    return (
        <>
        <h1>Incantations</h1> 
        <form onSubmit={handleSubmit}>
            <input type="text" id="incantation" name="incantation" placeholder='incantation here' onChange={handleChange}/>
            <input type="submit" value="Submit"/>
        </form>
        <Link to={'/playlists'}>{link}</Link>  
        </>
    )

}