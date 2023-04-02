import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList ({ galleryList, fetchGalleryList }) {

    return (
        <div>
            <ul>
                {
                    galleryList.map((item) => (
                        <GalleryItem 
                            key={item.id}
                            item={item}
                            fetchGalleryList={fetchGalleryList}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default GalleryList;