import RECEIVE_CURRENT_USER from '../actions/session_actions'

const usersReducer = (state, action) => {
  switch(action.type){
      case RECEIVE_CURRENT_USER:
        return Object.assign({}, state, {[action.currUser.id]: action.currUser})
      default:
        return state;
  }
}

export default usersReducer;

