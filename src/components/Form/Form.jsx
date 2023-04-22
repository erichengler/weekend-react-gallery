import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Axios from 'axios';

function Form() {

    const addItem = (event) => {
        event.preventDefault();
        document.getElementById("itemForm").reset();

        Axios.post('/gallery', {

        })
    }

    return (
        <Container>
            <form id="itemForm" onSubmit={addItem}>
                <Grid container width='440px' alignItems="center"
                    justifyContent="center" margin="auto">
                    <Grid item xs={6} >
                        <TextField id="filled-basic" label="Title" variant="filled" />
                        <TextField id="filled-basic" label="Image URL" variant="filled" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="filled-basic" label="Description"
                            variant="filled" multiline minRows={3.5} maxRows={3.5} />
                    </Grid>
                </Grid>
                <br />
                <Button onClick={addItem} variant="filled">
                    Add To Gallery
                </Button>
                <br /><br />
            </form>
        </Container>
    );
}

export default Form;