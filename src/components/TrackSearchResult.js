import React from 'react'

export default function TrackSearchResult({ track }) {
    return (
        <div className="search-result">
            <img src={track.albumUrl} />
        </div>
    )
}
