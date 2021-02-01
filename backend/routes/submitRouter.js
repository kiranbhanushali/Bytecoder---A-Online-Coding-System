var express = require('express')
var router = express.Router()
var path = require('path')
var axios = require('axios')

router.post('/submit', (req, res) => {
    console.log(req.body)

    axios
        .post('http://54.152.21.126:3000/solution/1', req.body)
        .then(function (response) {
            console.log(response)
            res.send(response.data)
        })
        .catch(function (error) {
            console.log(error)
            res.send(error)
        })

    // res.send(" something happend.... ");
})

router.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' })
    }

    const file = req.files.file

    file.mv(`./public/uploads/${file.name}`, (err) => {
        if (err) {
            console.error(err)
            return res.status(500).send(err)
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` })
    })
})
module.exports = router
