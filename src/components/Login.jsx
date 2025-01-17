"use client";

import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting form with data:', data);
        const res = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password
        });

        console.log('SignIn response:', res);

        if (res.error) {
            setError(res.error);
        } else {
            setError('');
            router.push('/'); // Redirect to dashboard or any other page
        }
    }

    return (
        <div className='flex flex-col p-6 my-16 w-[380px] mx-auto'>
            <h1 className='text-5xl text-center font-semibold pb-5 border-b'>Sign in</h1>
            <form className='flex flex-col gap-4 mt-4' onSubmit={handleSubmit}>
                <label htmlFor='email'>Email :</label>
                <input
                    name='email'
                    type='email'
                    id='email'
                    className='border p-2 rounded-md'
                    placeholder='email'
                    onChange={handleChange}
                    required
                />
                <label htmlFor='password'>Password :</label>
                <input
                    name='password'
                    type='password'
                    id='password'
                    placeholder='password'
                    className='border p-2 rounded-md'
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="bg-black text-white py-2 rounded-md">Sign In</button>
                {error && <p className="error">{error}</p>}
            </form>
            <Link href="/forgot" className="text-center mt-4">Forgot Password?</Link>
            <Link href="/signup" className="text-center mt-4">Don't have an account? <span className='underline'>Sign up</span></Link>
        </div>
    );
}