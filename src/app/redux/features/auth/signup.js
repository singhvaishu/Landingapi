"use client";
import { useRouter } from 'next/router';


import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    incrementAsync,
    selectCount,
} from './authSlice';
import { signUpWithEmailAndPassword } from '../../../../firebase/authService.js';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';


export default function Login() {
    // useClient(); // Marking this component as a client entry point
    const router = useRouter();
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('user123@gmail.com');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const user = await signUpWithEmailAndPassword(email, password);
            console.log('User signed up:', user);

            router.push('/PostPage');
            // Add logic for successful signup
            toast.success('Signup successful!');
        } catch (error) {
            console.error('Error signing up:', error.message);
            // Handle signup error
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
                        {/* <h2 className="text-2xl font-bold leading-9 tracking-tight text-white-900 mb-2  lg:text-white-900 sm:text-white"> */}
                        <h2 className="text-2xl font-bold leading-9 tracking-tight mb-2 text-white lg:text-grey-900">
                            Create a new  account
                        </h2>


                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="#" method="POST" onSubmit={handleSignup}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white lg:text-grey-900">
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
                                        <label htmlFor="password" className="block text-sm font-medium leading-6  text-white lg:text-grey-900">
                                            Password
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            value={password} // Set the value of the input to the state
                                            onChange={(e) => setPassword(e.target.value)} // Handle input changes
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>


                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>

                            <p className="mt-10 text-center text-sm text-gray-500">
                                Already a member?{' '}
                                <Link href="/LoginPage" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
