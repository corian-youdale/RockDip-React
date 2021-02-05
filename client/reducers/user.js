import {SET_USER} from '../actions'
// import {REMOVE_USER} from '../actions/authenticated'

const initialState = 
{

}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {...state, ...action.user}
        // case REMOVE_USER:
        //     return {}
        default:
            return state
    }
}

export default reducer
