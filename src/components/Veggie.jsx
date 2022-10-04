import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import {Link} from 'react-router-dom'

const Veggie = () => {
    
    const [veggie,setVeggie] = useState([])

    useEffect(() => {
        getVeggie()
    }, [])


 const getVeggie = async() => {
    const check = localStorage.getItem("veggie")
    if(check) {
        setVeggie(JSON.parse(check))
    }else{
        const api = await fetch("https://api.spoonacular.com/recipes/random?apiKey=95bbf02802c842799513d7e5cef33f6e&number=8&tags=vegetarian")
        const data = await api.json()
    localStorage.setItem("veggie", JSON.stringify(data.recipes))
    setVeggie(data.recipes)
    }
    
 }

  return (
    <Wrapper>
        <h3>Vegetarian Picks</h3>
        <Splide options={{
            perPage: 2,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3rem",
        }}>
        {
            veggie.map(recipe => {
                return (
                    <SplideSlide>
                    <Link to={'/recipe/' + recipe.id}>
                    <Card key={recipe.id}>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient/>
                    </Card>
                    </Link>
                    </SplideSlide>
                )
            })
        }
        </Splide>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin: 4rem 0rem;
`
const Card = styled.div `
    min-height: 15rem;
    border-radius: 2rem;
    overflow:hidden;
    position: relative;
    

    img{
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 10;
        left: 50%;
        bottom: 0%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const Gradient = styled.div `
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))
`

export default Veggie