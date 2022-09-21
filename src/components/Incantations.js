import React from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import { useState, useEffect } from 'react';



export default function Incantations ({accessToken}) {
    const [form, setForm] = useState("");


    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e, ) => {
        e.preventDefault();
        let spotifyApi;
        const incantation = {...form};
        let tracks = [];
        let id = '';
        const keyWords = incantation.incantation.split(" ");
        try {
            console.log(keyWords);
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
            console.log('created playlist!', id);
        } catch(err) {
            console.log(err);
        }
        try {
            keyWords.map(async (word) => {
               let data = await spotifyApi.searchTracks(`${word}`);
                for(let i = 0; i < data.body.tracks.items.length; i++) {
                tracks.push(data.body.tracks.items[i].uri);
               }
               console.log('43: ', tracks);
               spotifyApi.addTracksToPlaylist(id, tracks);
               console.log(`${tracks[0]}`);
        })
        } catch(err) {
            console.log(err)
        }
    }
    return (
        <>
        <h1>Incantations</h1> 
        <form onSubmit={handleSubmit}>
            <input type="text" id="incantation" name="incantation" placeholder='incantation here' onChange={handleChange}/>
            <input type="submit" value="Submit"/>
        </form>
             
        </>
    )

}