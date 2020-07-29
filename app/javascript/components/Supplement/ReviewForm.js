import React from 'react'

const ReviewForm = () => {
  return(
    <div className="wrapper">
      <form>
        <div className="">Tem uam opiniao sobre esse produto? Deixe aqui sua experiência</div>
        <div className="field">
          <input type="text" name="description" placeholder="Titulo da review"/>
        </div>
        <div className="field">
          <input type="text" name="description" placeholder="Deixe sua review aqui"/>
        </div>
        <div className="field">
          <div className="rating-container">
            <div className="rating-title-text">Deixe sua nota</div>
            [Star rating goes here]
          </div>
        </div>
        <button type="submit">Envia sua opinião</button>
      </form>
    </div>
  )
}

export default ReviewForm