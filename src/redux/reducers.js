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
    case actionTypes.MODAL_STATUS:
      return Object.assign({}, state, {
        modalStatus: action.modalStatus,
        loaderStatus: false,
        sucessModal: false
      })
      case actionTypes.LOADER_STATUS:
      return Object.assign({}, state, {
        loaderStatus: action.loaderStatus
      })
    case actionTypes.SHOW_MODAL_SUCCESS:
      return Object.assign({}, state, {
        loaderStatus: false,
        sucessModal: true
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