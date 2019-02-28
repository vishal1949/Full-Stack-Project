import * as SessionApiUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currUser) => {
    return({
        type: RECEIVE_CURRENT_USER,
        currUser
    });
}

const receiveSessionErrors = (errors) => {
    return({
        type: RECEIVE_SESSION_ERRORS,
        errors
    })
}


const logoutCurrentUser = () => {
    return({
        type: LOGOUT_CURRENT_USER,
    })
}

export const login = (user) => dispatch => {
    return SessionApiUtil.login(user)
        .then((currUser => dispatch(receiveCurrentUser(currUser))),
        err => dispatch(receiveSessionErrors(err.responseJSON)))
}

export const logout = () => dispatch => {
    return SessionApiUtil.logout().then(() => dispatch(logoutCurrentUser()))
}

export const signup = (user) => dispatch => {
    return SessionApiUtil.signup(user)
        .then((currUser => dispatch(receiveCurrentUser(currUser))),
         err => (dispatch(receiveSessionErrors(err.responseJSON)))) //currUser refers to current user
}