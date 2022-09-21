import React from 'react'

export default function TrackSearchResult({ track, chooseTrack }) {
    function handlePlay() {
        chooseTrack(track);
        console.log(track)
    }
    return (
        <>
            <div className="search-result" onClick={handlePlay}>
                <div className="search-result-art">
                    <img src={track.albumUrl} />
                </div>
                <div className="search-result-track">
                    <p>{track.title}</p>
                </div>
                <div className="search-result-artist">
                    <p>{track.artist}</p>
                </div>
            </div>
        </>
    )
}
