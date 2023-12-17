"use client"
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { signInWithEmailAndPasswordAsync } from '../../../../firebase/authService.js';
import Link from 'next/link';
import Image from 'next/image';
import { selectCount } from './authSlice';

export default function Login() {
    // const router = useRouter();
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const user = await signInWithEmailAndPasswordAsync(email, password);
            console.log('User logged in:', user);

            // Add logic for successful login
            // router.push('/PostPage');
            window.location.href = '/PostPage';

            toast.success('Login successful!');
        } catch (error) {
            console.log('Error logging in:', error.message);
            // Handle login error
            toast.error(`Error: ${error.message}`);
        }
    };

    return (
        <div className="bg-gradient-to-r from-teal-300 to-blue-900 min-h-screen flex justify-center items-center p-6 lg:p-8">
            <div className="p-4 lg:p-6" style={{ background: 'linear-gradient(23.55deg, #080D0D 75.24%, #173B4D 97.12%)' }}>
                <div className="flex flex-col lg:flex-row items-center  p-4 lg:p-8 mr-4">
                    <div className="mr-10 mb-4 lg:mb-8 overflow-hidden rounded-full">
                        <Image
                            src="https://inferenz.ai/wp-content/uploads/2022/09/mh1@3x.png"
                            alt="Home pic"
                            width={311}
                            height={335}
                            className="rounded-full"
                        />
                    </div>
                    <div className="w-full max-w-sm p-4 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold leading-9 tracking-tight text-grey-900 mb-2">
                            Sign in to your account
                        </h2>

                        <form className="space-y-4" action="#" method="POST" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-grey-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{ color: 'black' }}
                                        className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-grey-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <Link href="/ForgotPassword">
                                            <span className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                Forgot password?
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-indigo-500 focus:outline-none focus:ring focus:border-indigo-600"
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className="mt-2 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <Link href="/SignupPage" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Create an account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

