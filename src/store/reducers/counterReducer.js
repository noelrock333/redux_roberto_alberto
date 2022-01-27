const initialState = {
    counterValue: 0,
    name: '',
    id: ''
}

function counterReducer(state = initialState, action) {
    // action = { type, payload }
    switch(action.type) {
        case 'increment': {
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        }
        case 'decrement': {
            return {
                ...state,
                counterValue: state.counterValue - 1
            }
        }
        case 'reset': {
            return {
                ...state,
                counterValue: 0
            }
        }
        case 'SET_NAME': {
            return {
                ...state,
                name: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default counterReducer