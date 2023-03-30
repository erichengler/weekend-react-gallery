import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({ galleryList }) {

    return (
        <div>
            <ul>
                {
                    galleryList.map((item) => (
                        <GalleryItem 
                            key={item.id}
                            item={item}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default GalleryList;