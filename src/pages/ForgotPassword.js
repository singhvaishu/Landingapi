
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { sendPasswordResetEmailAsync } from '../firebase/authService';

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            console.log('Sending password reset email for email:', email);
            const user = await sendPasswordResetEmailAsync(email);
            toast.success('Password reset email sent. Check your inbox.');
        } catch (error) {
            console.error('Error sending password reset email:', error.message);
            toast.error(`Error: ${error.message}`);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-400">
            <div className="bg-white p-8 rounded-md shadow-md w-full sm:w-96">
                <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
                <form onSubmit={handleResetPassword} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email address:
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ color: 'black' }}
                            className="block w-full rounded-md border-0 py-1.5 text-black-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-indigo-500 text-black p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-400"
                        >
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
