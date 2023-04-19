import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function GalleryItem({ item, fetchGalleryList }) {

    // Hook to allow changes to what is displayed
    let [display, setDisplay] = useState('picture')

    // PUT request to add a like
    const addRemoveLike = (e) => {
        console.log(`addLike for ${item.id}`);
        axios.put(`/gallery/like/${item.id}`).then((response) => {
            fetchGalleryList();
        }).catch(error => {
            console.log(`Error in addLike ${error}`);
            alert('Something went wrong.');
        })
    }

    return (
        <Grid sx={{
            // Space between cards on the grid
            mx: '40px',
            my: '20px',
        }}>
            <Card sx={{
                // Styling of each card
                width: 300,
                height: 330,
                backgroundColor: '#79717A',
                border: '1px solid rgb(49, 49, 49)',
            }}>
                <CardContent>
                    <Typography variant="h5">
                        {item.title}
                    </Typography>

                    {/* DIV that displays picture or description */}
                    {/* TRY ADDING WIDTH AND HEIGHT TO THIS DIV TO FIX MARGIN ISSUES? */}
                    <div style={{ cursor: 'pointer' }}>
                        {
                            display === 'picture' ? (
                                <Typography>
                                    <img
                                        border='1px solid black'
                                        src={`${item.path}`}
                                        width='219px'
                                        height='219px'
                                        onClick={(e) => setDisplay(display = 'description')}
                                    />
                                </Typography>
                            ) : (
                                <Typography
                                    // These margin settings only work with 2 lines of text
                                    // and at 100% zoom. Working on a fix. See line 46.
                                    sx={{ my: '90px', mx: '20px' }}
                                    onClick={(e) => setDisplay(display = 'picture')}
                                >
                                    {item.description}
                                </Typography>
                            )
                        }
                    </div>
                </CardContent>
                
                <CardActions sx={{ justifyContent: "flex-end", cursor: 'pointer' }}>

                    {item.likes} &nbsp;
                    {
                        item.likes === 0 ? (
                            <ThumbUpOutlinedIcon
                                onClick={(e) => addRemoveLike(e)}
                            />
                        ) : (
                            <ThumbUpAltIcon
                                onClick={(e) => addRemoveLike(e)}
                            />
                        )
                    }

                </CardActions>
            </Card>
        </Grid>
    )
}

export default GalleryItem;