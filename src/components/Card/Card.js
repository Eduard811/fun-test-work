import React from 'react'
import {BackSvg} from '../common/BackSvg'
import classes from './Card.module.scss'
import CatImg from '../../assets/img/Cat.png'

const Card = ({cards, title, subtitle, toggleIsActive, toggleIsHover}) => {

  return (
    <React.Fragment>
      {
        cards.map(card => {
          return (
            <div
              key={card.id}
              className={classes.card}
              onMouseEnter={() => toggleIsHover(card.id, false)}
              onMouseLeave={() => toggleIsHover(card.id, true)}
            >
              <div className={classes.card__wrapper} onClick={() => toggleIsActive(card.id)}>
                <div className={card.disabled ? classes.svgDisabled : card.isActive ? classes.svgActive : classes.svg}>
                  <BackSvg />
                </div>
                <div className={card.disabled
                  ? classes.description + ' ' + classes.disabledDescription
                  : classes.description}>
                  {card.disabled ? <p>{title}</p> : card.isActive
                    ? card.isHover ? <p style={{color: '#e62e7a'}}>Котэ не одобряет?</p> : <p>{title}</p>
                    : <p>{title}</p>}
                  <p>{subtitle}</p>
                  <p>{card.taste}</p>
                  <p><span>{card.portions}</span> порций</p>
                  {
                    card.portions > 40 ? <p>5 мышей в подарок</p> : card.portions <= 10
                      ? <p>мышь в подарок</p> : <p>2 мыши в подарок</p>
                  }
                  {
                    card.portions > 40 && <p>заказчик доволен</p>
                  }
                </div>
                <div className={classes.lowerSide}>
                  {card.disabled
                    ? <img style={{opacity: 0.5}} src={CatImg} alt=""/>
                    : <img src={CatImg} alt=""/>}
                  <div className={card.disabled
                    ? classes.ellipse + ' ' + classes.disabled :
                    classes.ellipse + ' ' + (card.isActive ? classes.active : classes.default)}>
                    <p>{card.weight}</p>
                    <p>кг</p>
                  </div>
                </div>
              </div>
              <div className={classes.lowerText}>
                {card.disabled
                  ? <p style={{color: '#ffff66'}}>{`Печалька, ${card.taste} закончился.`}</p> :
                  card.isActive
                    ? <p>{card.description}</p>
                    : <p>Чего сидишь? Порадуй котэ, <span onClick={() => toggleIsActive(card.id)}>купи.</span></p>
                }
              </div>
            </div>
          )
        })
      }
    </React.Fragment>
  )
}

export default Card