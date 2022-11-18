import { Box } from '@mui/material'
import { useState, MouseEvent} from 'react'
import cocktailUtils from '../services/cocktailsService'
import SearchResultComp from './SearchResultComp'

function IngredientsComp({setResult}) {

  const [cocktail, setCocktail] = useState([])
  // const [searchResult, setSearchResult] = useState([])

  const ingredients = ["Lemon", "Tequila", "Vodka", "Gin"] 

  const getCocktails = async(e) => {
    e.preventDefault()
    const { data } = await cocktailUtils.getCocktailBySpirit(cocktail)
    // setSearchResult(data.drinks)
    console.log(data.drinks);
    setResult(data.drinks)
  }

  return (
    <div>

      <h1>Get cocktail by name</h1>
      <form onSubmit={getCocktails}>
        Name: <input type="text" onChange={(e) => setCocktail(e.target.value)} /> <br />
        <input type="submit" value="Get Drinks" />
      </form>
      <br />

      {
        ingredients.map((ing, key) => {
          return (
            <div key={key}>
              <button>{ing}</button> <br />
            </div>
          )
        })
      }


    </div>
  );
}

export default IngredientsComp;
