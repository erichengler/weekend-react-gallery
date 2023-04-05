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

// let display = 'picture';

function GalleryItem ({ item, fetchGalleryList }) {

    let [display, setDisplay] = useState('picture')

    // PUT request to add a like
    const addRemoveLike = (e) => {
        console.log(`addLike for ${item.id}`);
        axios.put(`/gallery/like/${item.id}`).then((response) => {
            fetchGalleryList();
        }).catch(error => {
            console.log(`Error in addLike ${error}`);
            // alert('Something went wrong.');
        })
    }

    return (
            <Grid sx={{
                mx: '80px',
                my: '40px',
            }}>
                <Card sx={{
                    width: 300,
                    height: 330,
                    backgroundColor: 'rgb(160, 185, 205)',
                    border: '1px solid rgb(49, 49, 49)',
                }}>
                    <CardContent>
                        <Typography variant="h5">
                            {item.title}
                        </Typography>

                        <div style={{cursor: 'pointer'}}>
                        {
                            display === 'picture' ? (
                                    <Typography>
                                        <img 
                                            border='1px solid black' 
                                            src={`${item.path}`} 
                                            width='220px' 
                                            height='220px'
                                            onClick={ (e) => setDisplay(display = 'description') }     
                                        />
                                    </Typography>
                            ) : (                                   
                                    <Typography
                                    // TODO: Change these margin settings somehow to compensate
                                    // TODO: for how large the description is...
                                        sx={{my: '90px', mx: '20px'}}
                                        onClick={ (e) => setDisplay(display = 'picture') }
                                    >
                                        {item.description}
                                    </Typography>
                            )
                        }
                        </div>
                    </CardContent>

                    <CardActions sx={{justifyContent: "flex-end"}}>

            {/* 
                I realize that as soon as there is 1 like,
                the filled in thumbs up icon will appear for everyone.

                Ideally, I would only display the filled in icon if
                the current user has liked the image.

                I just wanted more practice with conditional rendering.
            */}

                        {item.likes} &nbsp;
                        {
                            item.likes === 0 ? (
                                <ThumbUpOutlinedIcon 
                                    onClick={ (e) => addRemoveLike(e) } 
                                />
                            ) : (
                                <ThumbUpAltIcon 
                                    onClick={ (e) => addRemoveLike(e) }
                                />                              
                            )
                        }

                    </CardActions>
                </Card>
            </Grid>   
    )
}

export default GalleryItem;