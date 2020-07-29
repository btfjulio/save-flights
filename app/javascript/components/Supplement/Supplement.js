import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'
import ReviewForm from './ReviewForm'

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

    axios.get(url)
      .then((resp) => {
        setSupplement(resp.data)
        setLoaded(true)
      })
      .catch(resp => console.log(resp))

  }, [])

  const handleChange = (e) => {
    e.preventDefault()
    setReview({...review, [e.target.name]: e.target.value})
    console.log(review)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    debugger
    const supplement_id = supplement.data.id 
    axios.post('/api/v1/reviews', { review, supplement_id })
      .then(resp => {
        debugger
      })
      .catch(resp => {})
  }

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
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={supplement.data.attributes}
              review={review}
            />
          </Collumn>
        </Fragment>
      }
    </Wrapper>
  )
}

export default Supplement