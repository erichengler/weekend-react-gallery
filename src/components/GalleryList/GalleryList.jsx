import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function GalleryList ({ galleryList, fetchGalleryList }) {

    return (
        <Container>
            <Grid container spacing={2}>
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
        </Container>
    )
}

export default GalleryList;