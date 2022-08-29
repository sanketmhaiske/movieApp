import React, { useState, useEffect } from 'react'
import axios from 'axios'
import date from 'date-and-time';
import { Routes, Route, NavLink } from "react-router-dom";
import './App.css'



// *CSS 
const h2 = {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Manrope',
}
const form = {
    display: 'flex',
    flexDirection: 'column',
    width: '20rem',
    margin: '0 auto',
}
const input = {
    padding: '5px',
    fontSize: '15px',
    margin: '5px 0',
    outline: 'none',
}
const button = {
    padding: '10px',
    margin: '10px 0',
    border: 'none',
    background: 'black',
    color: 'white',
    cursor: 'pointer',
    outline: 'none',
    fontFamily: 'Manrope',
}

const img = {
    width: '100%',
    height: 'auto',
    margin: '1rem auto'
}

const PreviewDiv = {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'Manrope',
    border: '1px solid lightgray',
    borderRadius: '5px',
    height: '11rem',
    justifyContent: 'center',
}


function Upload() {
    const [thumbnail, setThumbnail] = useState();
    const [name, setName] = useState();
    const [rating, setRating] = useState();
    const [date, setDate] = useState();

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/movie', {
            thumbnail: thumbnail,
            name: name,
            rating: rating,
            date: date,
        })
            .then(response => {
                alert(response.data.result)
            })
            .catch(error => {
                alert(error.response.date.result)
            })
    }
    return (
        <>
            <h2 style={h2}>UPLOAD MOVIE DETAILS</h2>
            <form style={form} onSubmit={Submit}>
                {thumbnail ? <img style={img} src={thumbnail} /> :
                    <div style={PreviewDiv}>
                        <img style={{ width: '5rem' }} src='https://cdn-icons-png.flaticon.com/128/6176/6176346.png' />
                    </div>
                }
                <input type='text' placeholder='Thumbnail Link' style={input} onChange={(e) => setThumbnail(e.target.value)} />
                <input type='text' placeholder='Movie Name' style={input} onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='Movie rating' style={input} onChange={(e) => setRating(e.target.value)} />
                <input type='date' placeholder='Realise date' style={input} onChange={(e) => setDate(e.target.value)} />
                <button style={button}>UPLOAD</button>
            </form>
        </>
    )
}

export default Upload;