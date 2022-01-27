export function increment() {
    return { type: 'increment' }
}

export function decrement() {
    return { type: 'decrement' }
}

export function reset() {
    return { type: 'reset' }
}

export function setName(name) {
    return { type: 'SET_NAME', payload: name }
}
