import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import Grid from '@mui/material/Grid';

function GalleryList ({ galleryList, fetchGalleryList }) {

    return (
        <Grid container spacing={0}>
            {
                galleryList.map((item) => (
                    <GalleryItem 
                        key={item.id}
                        item={item}
                        fetchGalleryList={fetchGalleryList}
                    />
                ))
            }
        </Grid>

    )
}

export default GalleryList;