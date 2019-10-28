import { combineReducers } from 'redux'
import { EXAMPLE } from '../actions'

const exampleReducer = (state = false, action) => {
    switch(action.type) {
      case EXAMPLE:
        const example = action.payload
        return example
  
      default:
        return state
    }
};

export default combineReducers({
    example: exampleReducer
})