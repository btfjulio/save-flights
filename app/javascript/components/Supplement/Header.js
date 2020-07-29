import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%
  padding: 50px 100px 50px 0;
  text-align: center;
  
  img {
    height: 30%;
    width: 50%;
    border-radius: 100%;
    border: 1px solid rgba(0,0,0,0.1);
    margin-botom: 10px;
  }
  h1 {
    font-size: 30px;
  }
`

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`

const TotalOutOf = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 10px 0;
`

const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes
  const total = props.reviews.length
  return(
    <Wrapper>
      <img src={image_url} alt=""/> 
      <h1 className="">
        {name}
      </h1>
      <TotalReviews>{total} User reviews</TotalReviews>
      <div className="starRating"></div>
      <TotalOutOf>{avg_score} out of 5</TotalOutOf>

    </Wrapper>
  )
}

export default Header