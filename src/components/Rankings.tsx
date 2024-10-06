"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const Rankings = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const router = useRouter()

    return (
        <div className="relative inline-block text-left">
            <button 
                onClick={toggleDropdown} 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button">
                Rankings
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700">
                        <li>
                            <button 
                            className="fblock px-4 py-2 hover:bg-gray-100"
                            onClick={()=> {
                                router.push('/batsman/testbatsman')
                            }}>Men's Test Ranking</button>
                        </li>
                        <li>
                        <button 
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={()=> {
                                router.push('/rankings/odi')
                            }}>Men's ODI Ranking</button>
                        </li>
                        <li>
                        <button 
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={()=> {
                                router.push('/batsman/ttwentybatsman')
                            }}>Men's T20 Ranking</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
