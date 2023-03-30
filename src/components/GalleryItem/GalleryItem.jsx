import React from 'react';

function GalleryItem ({ item }) {

    return (
        <>
            <li>
                {item.title}
                <br />
                <img src={`${item.path}`} width='200px'/>
                <br />
                {item.description}
                <br />
                Likes: {item.likes}
                <br />
                <br />
                <br />
            </li>
        </>
    )
}

export default GalleryItem;