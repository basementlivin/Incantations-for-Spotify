import { useState, useEffect } from "react";
import axios from "axios"

export default function UserAuth(code) {
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        axios.post('http://localhost:4000/login', {
            code,
        })
        .then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, '/')
        })
        .catch(() => {
            window.location = "/"
        })
    }, [code])

    useEffect(() => {

    }, [refreshToken, expiresIn])

    return accessToken
}