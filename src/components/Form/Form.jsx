import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import axios from 'axios';

function Form({ 
    title, setTitle, path, setPath, 
    description, setDescription, fetchGalleryList }) {

    const addItem = (event) => {
        event.preventDefault();
        document.getElementById("itemForm").reset();

        axios.post('/gallery', {
            title: title,
            path: path,
            description: description
        }).then((response) => {
            setTitle('');
            setPath('');
            setDescription('');
            fetchGalleryList();
        }).catch((error) => {
            console.log(`Error in POST ${error}`);
            alert('Something went wrong!');
        })
    }

    return (
        <Container>
            <form id="itemForm" onSubmit={addItem}>
                <Grid container spacing={1} width='440px' justifyContent="center" margin="auto">
                    <Grid item xs={6} >
                        {/* TITLE INPUT */}
                        <TextField id="filled-basic" label="Title" variant="filled" 
                            onChange={e => setTitle(e.target.value)} />
                        {/* IMAGE URL INPUT */}
                        <TextField id="filled-basic" label="Image URL" variant="filled" 
                            onChange={e => setPath(e.target.value)} />
                    </Grid>
                    <Grid item xs={6}>
                        {/* DESCRIPTION INPUT */}
                        <TextField id="filled-basic" label="Description"
                            variant="filled" multiline minRows={3.5} maxRows={3.5} 
                            onChange={e => setDescription(e.target.value)} />
                    </Grid>
                </Grid>
                <br />
                <Grid container width='440px' justifyContent="center" margin="auto">
                    {/* ADD TO GALLERY BUTTON */}
                    <Button onClick={addItem} variant="filled" endIcon={<AddBoxIcon />}>
                        Add To Gallery
                    </Button>
                </Grid>
                <br /><br />
            </form>
        </Container>
    );
}

export default Form;