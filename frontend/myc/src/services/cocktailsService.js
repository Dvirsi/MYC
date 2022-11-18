import axios from 'axios'

const url = 'http://localhost:8000/api/cocktail/'

// searchByName/vodka

const getCocktailBySpirit = (spirit) => {
    return axios.get(url + "searchByName/" + spirit)
}

export default {getCocktailBySpirit}