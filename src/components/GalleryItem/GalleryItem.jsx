import React from 'react';
import axios from 'axios';
import './GalleryItem.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';


function GalleryItem ({ item, fetchGalleryList }) {

    // PUT request to add a like
    // TODO : Change thumbs up icon here
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
                my: '30px',
            }}>
                <Card className='Card' sx={{
                    maxWidth: 300,
                }}>

                    <CardContent>
                        <Typography variant="h5">
                            {item.title}
                        </Typography>

                        <Typography>
                            <img border='1px solid black' src={`${item.path}`} width='220px' height='220px' />
                        </Typography>

                        <Typography>
                            {item.description}
                        </Typography>
                    </CardContent>

                    <CardActions sx={{justifyContent: "flex-end"}}>
                        {item.likes} &nbsp;
                        <ThumbUpOutlinedIcon 
                            onClick={(e) => addLike(e)} 
                        />
                        
                    </CardActions>

                </Card>
            </Grid>   
    )
}

export default GalleryItem;