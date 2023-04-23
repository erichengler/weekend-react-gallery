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

// ! Removed above code to attempt stretch mode

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

// POST route to add item to gallery
router.post('/', (req, res) => {
    console.log('POST request made for /gallery');
    let itemToAdd = req.body;
    let queryText = `INSERT INTO "gallery" ("title", "path", "description")
                    VALUES ($1, $2, $3);`
                    pool.query(queryText, 
                        [itemToAdd.title, itemToAdd.path, itemToAdd.description])
                        .then((result) => {
                            res.sendStatus(201);
                        }).catch((error) => {
                            console.log(`Error in POST ${error}`);
                            res.sendStatus(500);
                        });
})

// DELETE route to delete item from gallery
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    const deleteIndex = Number(req.params.id);
    let queryText = `DELETE FROM "gallery" WHERE "id" = $1;`;
    pool.query(queryText, [deleteIndex]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in DELETE ${error}`);
        res.sendStatus(500);
    });
})

module.exports = router;