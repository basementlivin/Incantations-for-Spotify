import React from 'react';

export default function Playlist ({playlist}) {
    console.log(playlist);
    return (
        <>
            {playlist.map((track) => {
                return(
                    <h1>{track.name}</h1>
                )
            })}
        </>
    )
}