import React from 'react'
import UserAuth from './UserAuth'
import SpotifyWebApi from 'spotify-web-api-node';
import {useState, useEffect} from 'react';

const spotifyApi = new SpotifyWebApi({
  clientId: "de0242264777412ea8c3adc7e7c63029",
})


export default function Dashboard({code}) {
  const accessToken = UserAuth(code)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  console.log(searchResults)

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    spotifyApi.searchTracks(search).then(res => {
      setSearchResults(res.body.tracks.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce(
          (smallest, image) => {
            if (image.height < smallest.height) return image
            return smallest
          }, track.album.images[0])
        
        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url
        }
      }))
    })
  }, [search, accessToken])

    return (
      <>
      <form 
        type="search"
        >
          <input 
            type="text" 
            id="searchbar"
            placeholder="Search for Artists, Songs, Playlists..." 
            value={search}
            onChange={e => setSearch(e.target.value)}
            >
          </input>
      </form>
        <div className="dashboard-wrapper">
          <h1>User-specific content here, man.</h1>
        </div>
      </>
    )


    return (
        <div>
          <h1>This is totally working</h1>
          <div>
            {accessToken}
          </div>
          
        </div>
  )
}
