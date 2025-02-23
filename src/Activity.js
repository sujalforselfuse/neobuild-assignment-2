import React, { useEffect } from 'react'
import globe from './icon.png';
/* import getout from './getout.png';
import godfather from './godfather.png';
import inception from './inception.png';
import nationaltreasure from './nationaltreasure.png';
import themenu from './themenu.png';
import avengers from './avengers.png';
import { Search } from "lucide-react"; */
import Leftnav from './Leftnav';

export default function Activity() {

    const movies = [
        { id: 1, movie: "Inception", tickets: 2, amount: "$20", time: "7:30 PM", date: "2024-02-22" },
        { id: 2, movie: "Avatar", tickets: 3, amount: "$30", time: "5:00 PM", date: "2024-02-23" },
        { id: 3, movie: "Interstellar", tickets: 1, amount: "$10", time: "9:00 PM", date: "2024-02-24" },
    ];


    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    return (
        <div className="flex h-screen p-4">
            {/* Left Navigation Bar */}
            <Leftnav></Leftnav>

            {/* Main Content Area */}
            <div className="flex-1 flex-col">

                <div className='px-4 my-4 flex justify-end items-center'>


                    <div className='flex items-center'>
                        <div className='bg-[#D9D9D9] p-2 rounded-full mr-4'>
                            <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.7 34.2C13.4 32.9 15.3 31.875 17.4 31.125C19.5 30.375 21.7 30 24 30C26.3 30 28.5 30.375 30.6 31.125C32.7 31.875 34.6 32.9 36.3 34.2C37.4667 32.8333 38.375 31.2833 39.025 29.55C39.675 27.8167 40 25.9667 40 24C40 19.5667 38.4417 15.7917 35.325 12.675C32.2083 9.55833 28.4333 8 24 8C19.5667 8 15.7917 9.55833 12.675 12.675C9.55833 15.7917 8 19.5667 8 24C8 25.9667 8.325 27.8167 8.975 29.55C9.625 31.2833 10.5333 32.8333 11.7 34.2ZM24 26C22.0333 26 20.375 25.325 19.025 23.975C17.675 22.625 17 20.9667 17 19C17 17.0333 17.675 15.375 19.025 14.025C20.375 12.675 22.0333 12 24 12C25.9667 12 27.625 12.675 28.975 14.025C30.325 15.375 31 17.0333 31 19C31 20.9667 30.325 22.625 28.975 23.975C27.625 25.325 25.9667 26 24 26ZM24 44C21.2333 44 18.6333 43.475 16.2 42.425C13.7667 41.375 11.65 39.95 9.85 38.15C8.05 36.35 6.625 34.2333 5.575 31.8C4.525 29.3667 4 26.7667 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05 11.65 9.85 9.85C11.65 8.05 13.7667 6.625 16.2 5.575C18.6333 4.525 21.2333 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7667 43.475 29.3667 42.425 31.8C41.375 34.2333 39.95 36.35 38.15 38.15C36.35 39.95 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44Z" fill="#1D1B20" />
                            </svg>

                        </div>
                        <div className='text-black text-lg font-semibold text-wrap'>Naval <br />Ravikant</div>

                    </div>

                </div>

                <h1 className='font-semibold text-black text-xl px-4 my-4'>Activity</h1>

                <div className="w-full max-w-4xl px-4 mt-4">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b-2 border-gray-300">
                                <th className="py-2 text-center font-semibold ">ID</th>
                                <th className="py-2 text-center font-semibold">Movie</th>
                                <th className="py-2 text-center font-semibold">Tickets</th>
                                <th className="py-2 text-center font-semibold">Amount</th>
                                <th className="py-2 text-center font-semibold">Time</th>
                                <th className="py-2 text-center font-semibold">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {existingBookings.map((movie,index) => (
                                <tr key={movie.id} className="border-b border-gray-300 font-medium">
                                    <td className="py-2 text-center">{index+1}</td>
                                    <td className="py-2  pl-20">{movie.movie}</td>
                                    <td className="py-2 text-center">{movie.tickets}</td>
                                    <td className="py-2 text-center">{movie.amount}</td>
                                    <td className="py-2 text-center">{movie.time}</td>
                                    <td className="py-2 text-center">{movie.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>

    )
}
