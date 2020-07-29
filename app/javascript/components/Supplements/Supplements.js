import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Supplement from './Supplement'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Home = styled.div`
  text-align: center;
  width: 100vw;
  max-width: 1200px;
  margin: auto;
`
const Header = styled.div`
  padding: 100px;
  h1 {
    font-size: 42px;
  }
`
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`


const Supplements = () => {
  const [supplements, setSupplements] = useState([])

  useEffect(() => {
    axios.get('api/v1/supplements.json')
      .then(resp => setSupplements(resp.data.data))
      .catch(resp => console.log(resp))
  }, [supplements.length])
  // supplements.length is the event that fires the use effect action
  const grid = supplements.map(sup => {
    return (
      <Supplement
        key={sup.attributes.name}
        alt={sup.attributes.name}
        attributes={sup.attributes}
      />
    )
  })

  return (
    <Home>
      <Header>
        <h1>Supplements</h1>
        <Subheader>Honest, unbiased supplements reviews.</Subheader>
      </Header>
      <Grid>
        {grid}
      </Grid>
    </Home>
  )
}

export default Supplements