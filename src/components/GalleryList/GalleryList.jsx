import React from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function GalleryList({ galleryList, fetchGalleryList }) {

    return (
        // xl = Max 3 images wide
        <Container maxWidth='xl'>
            <Grid container spacing={0} justifyContent='center'>
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