"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const DropDownBatsman = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const router = useRouter();

    const toggleDropdown = () => {
        setIsOpen(prev => !prev);
    };

    const navigateTo = (path: string) => {
        router.push(path);
        setIsOpen(false); // Close the dropdown after navigation
    };

    return (
        <div className="relative inline-block text-left">
            <button 
                onClick={toggleDropdown} 
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                type="button">
                Top 10's Batsman
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                    <ul className="py-2 text-sm text-gray-700">
                        <li>
                            <button 
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => navigateTo('/batsman/testbatsman')}>
                                Top 10 Test Batsman
                            </button>
                        </li>
                        <li>
                            <button 
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => navigateTo('/batsman/odibatsman')}>
                                Top 10 ODI Batsman
                            </button>
                        </li>
                        <li>
                            <button 
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => navigateTo('/batsman/ttwentybatsman')}>
                                Top 10 T-20 Batsman
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
