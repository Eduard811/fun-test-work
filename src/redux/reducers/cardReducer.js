const TOGGLE_IS_ACTIVE = 'TOGGLE_IS_ACTIVE'
const TOGGLE_IS_HOVER = 'TOGGLE_IS_HOVER '

const initialState = {
  title: 'Сказочное заморское яство',
  subtitle: 'Нямушка',
  cards: [
    {id: Math.random(), disabled: false, isActive: false, taste: 'с фуа-гра',
      portions: 10, weight: '0,5', description: 'Печень утки разварная с артишоками.', isHover: true},
    {id: Math.random(), disabled: false, isActive: false, taste: 'с рыбой',
      portions: 40, weight: '2', description: 'Головы щучьи с чесноком да свежайшая сёмгушка.', isHover: true},
    {id: Math.random(), disabled: true, isActive: false, taste: 'с курой',
      portions: 100, weight: '5', description: 'Филе из цыплят с трюфелями в бульоне.', isHover: true},
    ]
}

const cardReducer = (state = initialState, action) => {
  const cards = [...state.cards]
  const card = cards.find(c => c.id === action.id)
  switch (action.type) {
    case TOGGLE_IS_ACTIVE:
      card.isActive = !card.isActive
      return {
        ...state,
        cards
      }
    case TOGGLE_IS_HOVER:
      card.isHover = action.isHover
      return  {
        ...state,
        cards
      }
    default:
      return state
  }
}

export const toggleIsActive = (id) => ({type: TOGGLE_IS_ACTIVE, id})
export const toggleIsHover = (id, isHover) => ({type: TOGGLE_IS_HOVER, id, isHover})

export default cardReducer