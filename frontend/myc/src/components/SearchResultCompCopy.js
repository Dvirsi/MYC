import { Box, Grid, Paper, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function SearchResultComp(props) {

  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    setDrinks(props.drinks)
  },[])

  return (
    <Box>
      <h2>Result Copy</h2>
      <input type="button" value="Drinks" onClick={() => console.log(drinks)} />

      <Grid container spacing={5} sx={{height: '400px'}}>
      {
        drinks !== undefined && drinks.map(drink => {
          return <Grid item xs={2} key={drink.idDrink}>
                    {/* <Button onClick={}> */}
                    <Item sx={{width: '170px'}}>
                      <img src={drink.strImageSource} alt={drink.strDrink}  style={{height: '100px'}}/> <br />
                      {drink.strDrink}
                    </Item>
                    {/* </Button> */}
                 </Grid>
      })
      }
      </Grid>
    </Box>
  );
}

export default SearchResultComp;
