import React, { useState } from 'react'

const Login = ({ handleLogin }) => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        handleLogin(email, password)

        setEmail('')
        setPassword('')
    }


    return (
        <div className='flex h-screen w-screen items-center justify-center box-border'>
            <div className='bg-transparent border-red-500 border-2 rounded-4xl'>
                <form
                    className='flex flex-col gap-2 p-30'
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        type="email"
                        className='border-2 border-red-500 px-7 py-3 rounded-full text-2xl'
                        placeholder='Enter your email'
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        type="password"
                        className='border-2 border-red-500 px-7 py-3 rounded-full text-2xl'
                        placeholder='Enter your password'
                    />
                    <button
                        className='mt-8 px-7 py-3 rounded-full text-2xl active:scale-99 bg-red-500 cursor-pointer'>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
