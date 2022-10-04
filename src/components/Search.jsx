import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        navigate("/searched/" + input)
    }

  return (
    <FormStyle onSubmit={Submit}>
        <div>
            <FaSearch/>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 1rem 20rem;

    div{
        width: 100%;
        position: relative;
    }

     input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1rem;
        color: white;
        padding: 0.8rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%
     }
     svg{
        position: absolute;
        top: 35%;
        left: 5%;
        color: white;
     }
`

export default Search