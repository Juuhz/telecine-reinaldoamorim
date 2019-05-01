// Import Middleware e Redux
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// Import InitialState
import { initialState } from './store';

// Import Tipos de Actions
import { actionTypes } from './actions';

// Reducers
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INFLUENCER:
      return Object.assign({}, state, {
        modalInfluencer: action.modalInfluencer,
        modalStatus: true
      })
    case actionTypes.CLOSE_MODAL:
      return Object.assign({}, state, {
        modalInfluencer: false,
        modalStatus: false
      })
    default:
      return state
  }
}

// Inicializa a Store
export function initializeStore (initialState) {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware())
  )
}