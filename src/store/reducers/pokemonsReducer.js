const initialPokemons = {
    name: ''
}

function pokemonsReducer(state =initialPokemons, action) {
  switch(action.type) {
    case 'SET_POKEMON_NAME': {
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

export default pokemonsReducer