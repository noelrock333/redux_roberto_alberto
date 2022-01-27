import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from './reducers/counterReducer'
import pokemonsReducer from './reducers/pokemonsReducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    pokemons: pokemonsReducer
})

let store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk),
    )
)

export default store