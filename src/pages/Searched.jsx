import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import styled from 'styled-components'

const Searched = () => {

  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams()

  const getSearched = async(name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=95bbf02802c842799513d7e5cef33f6e&query=${name}`)
    const recipes = await data.json()
    setSearchedRecipes(recipes.results)
} 

  useEffect(() => {
    getSearched(params.search)
  }, [params.search])
  

  return (
    <Grid>
      {searchedRecipes.map(item => {
        return (
          <Card key={item.id}>
            <Link to={'/recipe/' + item.id} >
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(10rem, 1fr));
    grid-gap: 2rem;
`

const Card = styled.div`
    img {
        width: 100%;
        height: 60%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`

export default Searched