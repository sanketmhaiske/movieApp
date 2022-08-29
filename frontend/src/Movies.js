import React, { useState, useEffect } from "react";
import axios from 'axios'



const movieBlock = {
    display: 'flex',
    flexDirection: 'column',
    width: '20rem',
    fontFamily: 'Manrope',
    boxShadow: '0 0 5px gray',
    padding: '5px',
    margin: '10px',
}
const mainDiv = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
    margin: '5px auto'
}
const h2 = {
    textAlign: 'center',
    fontFamily: 'Manrope',
    margin: '2rem 0',
}
const span = {
    margin: '2px',
    fontWeight: 'bold',

}

function Movies() {

    const [movies, setMovies] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/movies')
            .then(response => {
                setMovies(response.data.result)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <>
            <h2 style={h2}>Latest Movies</h2>
            <div style={mainDiv}>
                {movies && movies.map(val => (
                    <div style={movieBlock}>
                        <img style={{ width: '100%', height: 'auto' }} src={val.ThumbnailLink} />
                        <span style={{
                            ...span, background: 'linear-gradient(189deg, #aa4b6b, #6b6b83,#3b8d99)', color: 'white', textAlign: 'center', padding: '5px',
                            margin: '5px 0'
                        }}>{val.Name}</span>
                        <span style={span}>Overall Rating : <span style={{ fontWeight: 'lighter' }}> {val.Rating} </span></span>
                        <span style={span}>Realease Date : <span style={{ fontWeight: 'lighter' }}>  {val.RealeaseDate} </span></span>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Movies;