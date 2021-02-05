import { getFruits } from '../apis/fruits'

export const SET_FRUITS = 'SET_FRUITS'

export const SET_USER = 'SET_USER'

export const setUser = (user) => {
  return {
    type: SET_USER,
    user: user
  }
}

export function setFruits (fruits) {
  return {
    type: SET_FRUITS,
    fruits
  }
}

export function fetchFruits () {
  return dispatch => {
    return getFruits()
      .then(fruits => {
        dispatch(setFruits(fruits))
        return null
      })
  }
}
