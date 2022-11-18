const express = require('express')
const router = express.Router()
const axios = require("axios");

axios.interceptors.request.use(config => {
	config.headers['X-RapidAPI-Host'] = 'the-cocktail-db.p.rapidapi.com';
	return config;
});

axios.defaults.headers.common['X-RapidAPI-Key'] = '9973533';



const getCocktails = async(name) => {
    return axios.get('https://www.thecocktaildb.com/api/json/v2/9973533/recent.php', {
        params : {
            s: name
        }
    })
}

router.get('/searchByName/:name', async function (req, resp) {
    try {
        const spirit = req.params.name
        const { data } = await getCocktails(spirit)
        resp.status(200).json(data)
    } catch(error) {
        return resp.status(400).json(error.message)
    }
})



// console.log(getCocktails());
module.exports = router