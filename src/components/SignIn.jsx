import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEnvelope, 
    faLock, 
    faEye, 
    faEyeSlash 
} from '@fortawesome/free-solid-svg-icons';
import { 
    faGoogle, 
    faGithub 
} from '@fortawesome/free-brands-svg-icons';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your sign-in logic here
        console.log('Sign In Submitted', { email, password, rememberMe });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-100 to-white flex items-center justify-center px-4 py-12">
            <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 space-y-6">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-gray-600">
                        Sign in to continue to your account
                    </p>
                </div>

                {/* Sign In Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div className="relative">
                        <label 
                            htmlFor="email" 
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Email Address
                        </label>
                        <div className="relative">
                            <FontAwesomeIcon 
                                icon={faEnvelope} 
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                            />
                            <input 
                                type="email" 
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="relative">
                        <label 
                            htmlFor="password" 
                            className="block text-gray-700 font-medium mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <FontAwesomeIcon 
                                icon={faLock} 
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                            />
                            <input 
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-600"
                            >
                                <FontAwesomeIcon 
                                    icon={showPassword ? faEyeSlash : faEye} 
                                />
                            </button>
                        </div>
                    </div>

                    {/* Remember Me & Forgot Password */}
                    <div className="flex justify-between items-center">
                        <label className="flex items-center space-x-2">
                            <input 
                                type="checkbox" 
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                                className="form-checkbox text-purple-600 rounded"
                            />
                            <span className="text-gray-700">Remember me</span>
                        </label>
                        <a 
                            href="#" 
                            className="text-purple-600 hover:underline"
                        >
                            Forgot password?
                        </a>
                    </div>

                    {/* Sign In Button */}
                    <button 
                        type="submit" 
                        className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
                    >
                        Sign In
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center justify-center space-x-4">
                    <hr className="flex-grow border-gray-300" />
                    <span className="text-gray-500 text-sm">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Sign In */}
                <div className="grid grid-cols-2 gap-4">
                    <button 
                        className="flex items-center justify-center bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                        Google
                    </button>
                    <button 
                        className="flex items-center justify-center bg-purple-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        Pontem Wallet
                    </button>
                    <button 
                        className="flex items-center justify-center bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        <FontAwesomeIcon icon={faGithub} className="mr-2" />
                        GitHub
                    </button>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-gray-600">
                    Don't have an account? {' '}
                    <a 
                        href="#" 
                        className="text-purple-600 hover:underline"
                    >
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;