import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function LoginPage() {

    return (
        <>
            <form>
                <input type="text" 
                
                />
                <input type="password" 
                
                />
                <button>로그인</button>
                <Link to = "/createaccount">회원가입</Link>
            </form>
        </>
    )
}

export default LoginPage