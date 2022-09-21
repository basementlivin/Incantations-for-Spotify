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
        try {
            const incantation = {...form};
            let tracks = [];
            let id = '';
            const keyWords = incantation.incantation.split(" ");
            console.log(keyWords);
            const spotifyApi = new SpotifyWebApi({
                clientId: "de0242264777412ea8c3adc7e7c63029",
                clientSecret: "3e44db334b744416b587c80314f5745f",
                accessToken: accessToken
            });

            spotifyApi.createPlaylist(`${incantation.incantation}`, {
                'description': 'Created over a piping hot cauldron with the incantations for spotify app🪄', 
                'public': 'true',
            }).then(function(data) {
                id = data.body.id;
                console.log('Created playlist!', id);
            }, function(err) {
                console.log(err);
            })
            .then(keyWords.map((word) => {
                spotifyApi.searchTracks(`${word}`)
                .then(function(data) {
                    tracks.push(data.body);
                }, function(err) {
                    console.log(err);
                });
            }))
            .then(spotifyApi.addTracksToPlaylist(`spotify:playlist:${id}`, [tracks])
            .then(function(data) {
                console.log(id);
                console.log('Added tracks!');
            }, function(err) {
                console.log(err);
            }))
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