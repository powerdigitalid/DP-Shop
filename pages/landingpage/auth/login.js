'use client'
import React, { useState } from 'react'
import {useRouter} from 'next/router'
import signIn from '../../firebase/auth/signin'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const router = useRouter()

    const handleSignIn = async (e) => {
        e.preventDefault()
        const {result, error} = await signIn(email, password)
        if(error){
            setError(error.message)
        } else {
            router.push('/landingpage/chart')
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSignIn}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}
