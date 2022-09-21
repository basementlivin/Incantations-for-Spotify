import React from 'react';
import Playlist from './Playlist'
import SpotifyWebApi from 'spotify-web-api-node';

export default function Incantations ({accessToken}) {
    const handleSubmit = ((e) => {
        e.preventDefault();
        e.target.value.split(' ')
    })
    return (
        <>
        <h1>Incantations</h1> 
        <form>
            <input type="text" id="incantation" name="incantation" placeholder='incantation here'/>
            <input type="submit" value="Submit" name="submit-incantation"/>
        </form>
        <Playlist />      
        </>
    )

}