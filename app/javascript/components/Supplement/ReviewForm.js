import React, { Fragment } from 'react'
import styled from 'styled-components'
import Hover from './Stars/Hover'
import Selected from './Stars/Selected'
import Gray from './Stars/Gray'

const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`

const RatingContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 4px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff;
`
const RatingBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;chartset=UTF-8,${Gray}"); 
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%;
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;chartset=UTF-8,${Selected}"); 
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;chartset=UTF-8,${Hover}");
  }
`
const Wrapper = styled.div`
  background: #000;
  height: 100vh;
  width: 80%;
  margin: auto;
  padding-top: 100px; 
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
const Field = styled.div`
  border-radius: 4px;
  width: 100%;
  display: flex;
  justify-content: center;
  input {
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    padding: 12px;
    margin-bottom: 10px;
    width: 100%;
  }

  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    padding: 10px;
  }
`
const Headline = styled.div`
  color: #fff;
  text-align: center;
  padding:20px;
  font-size: 20px;
  font-weigth: bold;
`


const SubmitBtn = styled.div`
  color: #fff;
  background: #333;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0,1s;
  width: 100%;
  text-align: center;
  border: 1px solid #fff;
  &:hover {
    background: #fff;
    color: #000;
  }
`

const ReviewForm = (props) => {

  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment key={score} >
        <input
          type="radio"
          name="rating"
          id={`rating-${score}`}
          checked={props.review.score == score}
          onChange={() => console.log('selected:', score)}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    )
  })

  

  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>Tem uma opiniao sobre esse produto? Deixe aqui sua experiência</Headline>
        <Field>
          <input
            type="text"
            name="title"
            placeholder="Titulo da review"
            onChange={props.handleChange}
            value={props.review.title}
          />
        </Field>
        <Field>
          <input
            type="text"
            name="description"
            placeholder="Deixe sua review aqui"
            onChange={props.handleChange}
            value={props.review.description}
          />
        </Field>
        <Field>
          <RatingContainer>
            <RatingTitle>Deixe sua nota</RatingTitle>
            <RatingBox>
              {ratingOptions}
            </RatingBox>
          </RatingContainer>
        </Field>
        <SubmitBtn>Envie sua opinião</SubmitBtn>
      </form>
    </Wrapper>
  )
}

export default ReviewForm