import { useSelector } from 'react-redux'

function CounterName() {
    var name = useSelector((state) => state.counter.name)
    return (
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default CounterName