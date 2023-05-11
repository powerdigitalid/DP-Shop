'use client'
import React, { useState } from 'react'
import {useRouter} from 'next/router'
import signUp from '../../firebase/auth/signup'

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const router = useRouter()

    const handleSignUp = async (e) => {
        e.preventDefault()
        const {result, error} = await signUp(email, password)
        if(error){
            setError(error.message)
        } else {
            router.push('/chart')
        }
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSignUp}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    )
}
