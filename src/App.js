import React from 'react';
import './App.css';
import Categories from './components/Categories';
import Page from './pages/Page';
import { BrowserRouter, Link } from "react-router-dom"
import Search from './components/Search';
import styled from 'styled-components';
import {GiKnifeFork} from "react-icons/gi"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={'/'}>ArealtemRecipes</Logo>
      </Nav>
          <Search/>
          <Categories/>
          <Page/>
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
`
const Nav = styled.div`
  padding: 2rem 0rem;
  display:flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`

export default App;
