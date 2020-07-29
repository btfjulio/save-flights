import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import  ReviewForm from './ReviewForm'

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const Collumn = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;
  &:last-child {
    background: #000;
  }
`
const Main = styled.div`
  
`



const Supplement = (props) => {
  const [supplement, setSupplement] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const slug = props.match.params.slug
    const url = `/api/v1/supplements/${slug}`

    Axios.get(url)
      .then((resp) => {
        setSupplement(resp.data)
        setLoaded(true)
      })
      .catch(resp => console.log(resp))

  }, [])

  return (
    <Wrapper>
      {
        loaded &&
        <Fragment>
          <Collumn>
            <Main>
                <Header
                  attributes={supplement.data.attributes}
                  reviews={supplement.included}
                />
            </Main>
            <div className="reviews"></div>
          </Collumn>
          <Collumn>
            <ReviewForm />
          </Collumn>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Supplement