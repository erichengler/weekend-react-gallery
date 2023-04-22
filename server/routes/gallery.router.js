const express = require('express');
const router = express.Router();
const pool = require('../modules/gallery.data');
// const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if( galleryItem.id == galleryId ) {
//             galleryItem.likes += 1;
//         } 
//     }
//     res.sendStatus(200);
// }); 
// END PUT Route

// GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); 
// END GET Route

// ! Removed above to attempt stretch mode

// GET route for "gallery" database
router.get('/', (req, res) => {
    console.log('GET request /gallery');
    let queryText = 'SELECT * from "gallery" ORDER BY id;';
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
})

// PUT route to add 1 to likes
router.put('/:id', (req, res) => {
    console.log('PUT request /gallery');
    let itemId = req.params.id;
    let queryText = 'UPDATE "gallery" SET "likes" = "likes" + $1 WHERE "id" = $2;';
    pool.query(queryText, [1, itemId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500);
    });
})


module.exports = router;