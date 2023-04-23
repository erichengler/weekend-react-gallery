import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Paper from '@mui/material/Paper';

function GalleryItem({ item, fetchGalleryList }) {

    // Hook to allow changes to what is displayed
    let [display, setDisplay] = useState('picture')

    // PUT request to add a like
    const addLike = (e) => {
        console.log(`addLike for ${item.id}`);
        axios.put(`/gallery/${item.id}`).then((response) => {
            fetchGalleryList();
        }).catch(error => {
            console.log(`Error in addLike ${error}`);
            alert('Something went wrong.');
        });
    }

    const removeItem = (e) => {
        console.log(`removeItem ${item.id}`);
        if (window.confirm("Are you sure you want to delete?")) {
            axios.delete(`/gallery/${item.id}`).then((response) => {
                fetchGalleryList();
            }).catch((error) => {
                console.log(`Error in removeTask ${error}`);
                alert('Something went wrong!');
            });
        }
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
                maxHeight: 330,
                backgroundColor: '#79717A',
                border: '1px solid rgb(49, 49, 49)',
            }}>
                <CardContent>
                    <Typography variant="h5">
                        {item.title}
                    </Typography>
                    {/* DIV that displays picture or description */}
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
                                    sx={{ my: '90px', mx: '15px', 
                                        minHeight: '47px', maxHeight: '47px' }}
                                    onClick={(e) => setDisplay(display = 'picture')}
                                >
                                    {item.description}
                                </Typography>
                            )
                        }
                    </div>
                </CardContent>
                <CardActions>
                    <ThumbUpAltIcon
                        sx={{ cursor: 'pointer' }}
                        onClick={(e) => addLike(e)}
                    />
                    &nbsp; {item.likes}

                    <DeleteForeverIcon
                        sx={{
                            paddingLeft: '210px',
                            cursor: 'pointer'
                        }}
                        onClick={(e) => removeItem(e)}
                    />
                </CardActions>
            </Card>
        </Grid>
    )
}

export default GalleryItem;