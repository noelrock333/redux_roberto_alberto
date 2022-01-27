import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement, reset, setName } from '../../store/actions/counterActions'
import { fetchPokemon } from '../../store/actions/pokemonActions'

function Counter() {
    const dispatch = useDispatch()

    const handleNameChange = ({ target }) => {
        const { value } = target
        dispatch(setName(value))
    }

    useEffect(() => {
        dispatch(fetchPokemon())
    }, [])

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <div>
                <input type="text" placeholder='Put your name here' onChange={handleNameChange} />
            </div>
        </div>
    )
}

export default Counter