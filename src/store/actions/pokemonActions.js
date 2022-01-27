export const fetchPokemon = () => (dispatch) => {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(response => response.json()).then(data => {
        dispatch({type: 'SET_POKEMON_NAME', payload: data.name})
    })
}