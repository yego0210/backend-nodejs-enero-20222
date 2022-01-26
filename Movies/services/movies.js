const MovieModel = require("../models/movie")
class Movies{
    get(id){
        return {
            id,
            title:"Spiderman",
            rating:4.5,
            fecha:"16-dic-2021"
        }
    }

    getAll(){
        return [
            {
                id:1,
                title:"Spiderman",
                rating:4.5,
                fecha:"16-dic-2021"
            },
            {
                id:2,
                title:"Spiderman",
                rating:4.5,
                fecha:"16-dic-2021"
            },
            {
                id:3,
                title:"Spiderman",
                rating:4.5,
                fecha:"16-dic-2021"
            }
        ]
    }

    async create(){
        const movie = await MovieModel.create({
            title:"Spiderman",
            rating:4.5,
            date:new Date()
        })

        return movie
    }
}

module.exports = Movies