import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';

function App() {
    const [galleryList, setGalleryList] = useState([])

    // Axios GET Request to get data from /gallery
    const fetchGalleryList = () => {
        axios.get('/gallery').then((response) => {
            setGalleryList(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong.');
        })
    };

    useEffect(() => {
        fetchGalleryList();
    }, []);


    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Gallery of My Life</h1>
            </header>
            <GalleryList 
                galleryList={galleryList}
            />
        </div>
    );
}

export default App;
