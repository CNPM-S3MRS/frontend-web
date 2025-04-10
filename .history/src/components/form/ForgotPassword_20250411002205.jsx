import React from "react";

const ForgotPassword = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
        
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div className="flex items-center justify-between">
            <button
                type="button"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                    Reset
                </button>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Send Reset Link
            </button>
            </div>
        </form>
        </div>
    );
};

export default ForgotPassword;