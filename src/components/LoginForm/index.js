import React, { useState } from 'react'
import LoginFormStyled from './style'

function LoginForm() {
    let [showName, setShowName] = useState(true)
    return (
        <LoginFormStyled>
            <span>Login form</span>
            {showName && <input name="name" type="text" placeholder='Your name here' />}
            <input name="password" type="password" placeholder='Your password here' />
            <button onClick={() => setShowName(false)}>Hide name input</button>
        </LoginFormStyled>
    );
}

export default LoginForm