import React from 'react'
import globe from './icon.png';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Leftnav() {

    const location = useLocation();

    const isBookingActive = location.pathname.includes('/booking') || location.pathname.includes('/selection');
    const isActivityActive = location.pathname.includes('/activity');


    return (
        <div className="bg-black text-white flex flex-col justify-start items-center w-64 p-6 rounded-md my-4 ml-4">
            <div className="flex gap-2 justify-center items-center mt-4 mb-10">
                <img className="h-6" src={globe} alt="Globe" />
                <h1 className="text-xl font-semibold">Almanack</h1>
            </div>
            <Link to={'/booking'} className={`w-full flex justify-center items-center mb-6 font-semibold px-2 rounded-lg ${isBookingActive ? 'bg-white text-black' : ' text-white'
                }`}>
                <svg width="22" height="22" viewBox="0 0 36 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 31.5C6.675 31.5 5.9625 31.2125 5.3625 30.6375C4.7875 30.0375 4.5 29.325 4.5 28.5V7.5C4.5 6.675 4.7875 5.975 5.3625 5.4C5.9625 4.8 6.675 4.5 7.5 4.5H28.5C29.325 4.5 30.025 4.8 30.6 5.4C31.2 5.975 31.5 6.675 31.5 7.5V28.5C31.5 29.325 31.2 30.0375 30.6 30.6375C30.025 31.2125 29.325 31.5 28.5 31.5H7.5ZM18 24C18.95 24 19.8125 23.725 20.5875 23.175C21.3625 22.625 21.9 21.9 22.2 21H28.5V7.5H7.5V21H13.8C14.1 21.9 14.6375 22.625 15.4125 23.175C16.1875 23.725 17.05 24 18 24Z" fill="currentColor" />
                </svg>
                <div className=" px-4 py-2 ">Booking</div>
            </Link>
            <Link to={'/activity'} className={`w-full flex justify-center items-center mb-6 font-semibold px-2 rounded-lg ${isActivityActive ? 'bg-white text-black' : ' text-white'
                }`}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18L4.5 10.5L6.6 8.325L10.5 12.225V0H13.5V12.225L17.4 8.325L19.5 10.5L12 18ZM3 24C2.175 24 1.46875 23.7063 0.88125 23.1188C0.29375 22.5312 0 21.825 0 21V16.5H3V21H21V16.5H24V21C24 21.825 23.7063 22.5312 23.1188 23.1188C22.5312 23.7063 21.825 24 21 24H3Z" fill="currentColor" />
                </svg>

                <div className="  px-4 py-2">Activity</div>
            </Link>


        </div>
    )
}
