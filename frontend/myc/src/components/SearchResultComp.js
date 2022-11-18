import { Box } from '@mui/material'
import { useEffect, useState } from 'react'

function SearchResultComp(props) {

  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    console.log(props);
    setDrinks(props.drinks)
  },[])

  return (
    <Box>
      <h2>Result</h2>
      <input type="button" value="Drinks" onClick={() => console.log(drinks)} />
      {
        drinks.map(drink => {
          return <Box sx={{height:'10px', width:'10px'}}>
                    <img src={drink.strImageSource} alt="" />
                 </Box>
      })
      }
    </Box>
  );
}

export default SearchResultComp;
