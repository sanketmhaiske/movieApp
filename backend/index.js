const express = require('express')
const PORT = 3001;
const bodyparser = require('body-parser')
const cors = require('cors')
const multer = require('multer')
var path = require('path')

const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static(path.join(__dirname, 'Gallary')));

// Accessing Database module 
let MovieData = require('./modules/data')

// getRequest 
app.get('/', (req, res) => {
    return res.status(200).send('Server is working')
})

app.get('/movies', (req, res) => {
    MovieData.find().then(data => {
        return res.status(200).json({
            message: 'Success',
            result: data
        })
    })
})



// disk Storage
// const PictureStorage = multer.diskStorage({
//     destination: './Gallary/Thumbnails',
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
// })

// var UploadPicture = multer({
//     storage: PictureStorage,
// }).single('thumbnail');


// Movie Validation 
function Validation(req, res, next) {
    if (req.body.name == '' || req.body.rating == '' || req.body.date == '' || !req.body.thumbnail) {
        return res.status(400).json({
            message: 'Error',
            result: 'Please fill all required inputs !'
        })
    } else {
        next();
    }
}

app.post('/movie', Validation, (req, res) => {
    let name = req.body.name;
    let rating = req.body.rating;
    let releasedate = req.body.date;

    let addMovie = new MovieData({
        ThumbnailLink: req.body.thumbnail,
        Name: name,
        Rating: rating,
        RealeaseDate: releasedate,
    })
    addMovie.save().then(data => {
        return res.status(200).json({
            message: 'Success',
            result: 'Movie has been Added !'
        })
    })

})


app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`)
})