import { useSelector } from 'react-redux'

function CounterHeader() {
    const counterValue = useSelector((state) => state.counter.counterValue)
    const pokemonName = useSelector((state) => state.pokemons.name)
    return (
        <>
            <h1>{counterValue}</h1>
            <h2>{pokemonName}</h2>
        </>
    )
}

export default CounterHeader