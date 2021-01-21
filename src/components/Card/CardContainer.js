import React from 'react'
import Card from './Card'
import {connect} from 'react-redux'
import {toggleIsActive, toggleIsHover} from '../../redux/reducers/cardReducer'

const CardContainer = ({cards, title, subtitle, toggleIsActive, toggleIsHover}) => {
  return (
    <Card
      cards={cards}
      title={title}
      subtitle={subtitle}
      toggleIsActive={toggleIsActive}
      toggleIsHover={toggleIsHover}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    cards: state.card.cards,
    title: state.card.title,
    subtitle: state.card.subtitle
  }
}
export default connect(mapStateToProps, {toggleIsActive, toggleIsHover})(CardContainer)