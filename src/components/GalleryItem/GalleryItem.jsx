import React from 'react';
import axios from 'axios';

function GalleryItem ({ item, fetchGalleryList }) {

    // PUT request to add a like
    const addLike = (e) => {
        console.log(`addLike for ${item.id}`);
        axios.put(`/gallery/like/${item.id}`).then((response) => {
            fetchGalleryList();
        }).catch(error => {
            console.log(`Error in addLike ${error}`);
            alert('Something went wrong.');
        })
    }

    return (
        <div>
            {item.title}
            <br />
            <img src={`${item.path}`} width='200px'/>
            <br />
            {item.description}
            <br />
            <button onClick={(e) => addLike(e)}>Like</button>
            <br />
            Likes: {item.likes}
            <br />
            <br />
            <br />
        </div>
    )
}

export default GalleryItem;