const express = require("express")
const Movies = require("../services/movies")

function movies(app){
    const router = express.Router()
    const moviesService = new Movies()
    app.use("/movies",router)

    router.get('/:id',(req,res)=>{
        const {id} = req.params
        const movie = moviesService.get(id)
        return res.status(200).json(movie)
    })
    router.get('/',(req,res)=>{
        const movies = moviesService.getAll()
        return res.status(200).json(movies)
    })
    router.post('/guardar',(req,res)=>{
        console.log(req.body)
        return res.status(200).send('Hola, guardar')
    })
    
}


module.exports = movies