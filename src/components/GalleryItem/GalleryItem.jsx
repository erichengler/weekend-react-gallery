import React from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


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
            <Grid sx={{
                mx: '80px',
                my: '25px',
            }}>
                <Card sx={{
                    maxWidth: 300,
                    backgroundColor: 'rgb(160, 185, 205)',
                    border: '1px solid rgb(49, 49, 49)',
                }}>
                    <CardContent>
                        <Typography variant="h5">
                            {item.title}
                        </Typography>
                        
                    {/* TODO: onClick replace this with Item Description */}
                        <Typography sx={{
                            mx: '20px'
                        }}>
                            <img border='1px solid black' src={`${item.path}`} width='220px' height='220px' />
                        </Typography>

                    {/* Item Description */}
                        {/* <Typography>
                            {item.description}
                        </Typography> */}
                        
                    </CardContent>

                    <CardActions sx={{justifyContent: "flex-end"}}>

                        {/* 
                            I realize that as soon as there is at least 1 like,
                            the filled in thumbs up icon will appear for everyone.

                            Ideally, I would only display the filled in icon if
                            the current user has liked the image.
                        */}

                        {item.likes} &nbsp;
                        {
                            item.likes === 0 ? (
                                <ThumbUpOutlinedIcon 
                                    onClick={(e) => addLike(e)} 
                                />
                            ) : (
                                <ThumbUpAltIcon 
                                    // onClick={(e) => removeLike(e)}
                                />                              
                            )
                        }

                    </CardActions>
                </Card>
            </Grid>   
    )
}

export default GalleryItem;