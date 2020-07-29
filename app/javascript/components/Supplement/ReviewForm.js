import React from 'react'

const ReviewForm = (props) => {
  return(
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div className="">Tem uam opiniao sobre esse produto? Deixe aqui sua experiência</div>
        <div className="field">
          <input 
            type="text" 
            name="title" 
            placeholder="Titulo da review" 
            onChange={props.handleChange}
            value={props.review.title}
          />
        </div>
        <div className="field">
          <input 
            type="text" 
            name="description" 
            placeholder="Deixe sua review aqui" 
            onChange={props.handleChange}
            value={props.review.description}
          />
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Deixe sua nota</div>
            [Star rating goes here]
          </div>
        </div>
        <button type="submit">Envie sua opinião</button>
      </form>
    </div>
  )
}

export default ReviewForm