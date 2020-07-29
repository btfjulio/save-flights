import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.div`
  border: 1px solid #efefef;
  background: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
`
const SupplementImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 90%;
    width: 80%;
    object-fit: contain;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`
const SupplementName = styled.div`
  padding: 20px 0 10px 0;
  margin-bottom: 10px;
`
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;
  margin-top: auto;
  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    with: 100%;
    text-decoration: none;
  }
`

const Supplement = (props) => {
  return (
    <Card>
      <SupplementImage>
        <img src={props.attributes.image_url} alt={props.attributes.name}/>
      </SupplementImage>
      <SupplementName>
        {props.attributes.name}
      </SupplementName>
      <LinkWrapper>
        <Link to={`/supplements/${props.attributes.slug}`}>View Supplement</Link>
      </LinkWrapper>
    </Card>
  )
}

export default Supplement