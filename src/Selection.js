import React, { useEffect, useState } from 'react'
import globe from './icon.png';
/* import getout from './getout.png';
import godfather from './godfather.png';
import inception from './inception.png';
import nationaltreasure from './nationaltreasure.png'; */
import Leftnav from './Leftnav';
import nationaltreasure from './assets/images/nationaltreasure.png';
import { DatePicker } from "@heroui/date-picker";
import { useNavigate } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import { getLocalTimeZone, today } from "@internationalized/date";

import 'react-toastify/dist/ReactToastify.css';
import "react-datepicker/dist/react-datepicker.css";
import movies from './movies';
import { ring } from 'ldrs'
import { Calendar } from 'lucide-react';
ring.register()
export default function Selection() {

    const [id, setId] = useState('');
    const [count, setCount] = useState(1);
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const handleIncrement = () => setCount(prev => prev + 1);
    const handleDecrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1));
    const [selectedTime, setSelectedTime] = useState("12:00");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [value, setValue] = useState(today(getLocalTimeZone()));
    const successToast = (msg) => toast.success(msg, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        transition: Slide,
        theme: "light",

    });
    //const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today's date

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log("Selected Date:", date);
    };


    const timeSlots = [
        {
            time: "9:00",
            icon: (
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                    />
                </svg>
            ),
        },
        {
            time: "12:00",
            icon: (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999ZM14.939 16.5H9.06c.652 2.414 1.786 4.002 2.939 4.002s2.287-1.588 2.939-4.002Zm-7.43 0H4.785a8.532 8.532 0 0 0 4.094 3.411c-.522-.82-.953-1.846-1.27-3.015l-.102-.395Zm11.705 0h-2.722c-.324 1.335-.792 2.5-1.373 3.411a8.528 8.528 0 0 0 3.91-3.127l.185-.283ZM7.094 10H3.735l-.005.017a8.525 8.525 0 0 0-.233 1.984c0 1.056.193 2.067.545 3h3.173a20.847 20.847 0 0 1-.123-5Zm8.303 0H8.603a18.966 18.966 0 0 0 .135 5h6.524a18.974 18.974 0 0 0 .135-5Zm4.868 0h-3.358c.062.647.095 1.317.095 2a20.3 20.3 0 0 1-.218 3h3.173a8.482 8.482 0 0 0 .544-3c0-.689-.082-1.36-.236-2ZM8.88 4.09l-.023.008A8.531 8.531 0 0 0 4.25 8.5h3.048c.314-1.752.86-3.278 1.583-4.41ZM12 3.499l-.116.005C10.62 3.62 9.396 5.622 8.83 8.5h6.342c-.566-2.87-1.783-4.869-3.045-4.995L12 3.5Zm3.12.59.107.175c.669 1.112 1.177 2.572 1.475 4.237h3.048a8.533 8.533 0 0 0-4.339-4.29l-.291-.121Z" /></svg>
            ),
        },
        {
            time: "18:00",
            icon: (
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                    />
                </svg>
            ),
        },
    ];

    

    const handleBooking = () => {
        console.log('lskn',value.day,value.month,value.year,value);        
        setLoading(true);
        const bookingDetails = {
            id: id,
            movie: movies.find(movie => movie.id == id).title,
            tickets: count,
            amount: `$${count * 25}`,
            time: selectedTime,
            date: `${value.day}-${value.month}-${value.year}`,
        };
        const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

        // Append new booking to the existing list
        const updatedBookings = [...existingBookings, bookingDetails];

        // Save the updated list back to localStorage
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
        console.log(bookingDetails);
        setLoading(false);
        successToast("Booking Successful !");
        setTimeout(() => {
            navigate(`/activity`);
        }, 3000);  // 5 seconds delay

    };

    useEffect(() => {
        setId(localStorage.getItem('bookid'));
    }, []);

    return (
        <div className="flex h-screen p-4">
            {/* Left Navigation Bar */}
            <Leftnav></Leftnav>

            {/* Main Content Area */}
            <div className="flex-1 flex-col">

                <div className=' px-4 my-4 flex justify-between items-start'>
                    <div className=''>
                        {
                            movies.filter(movie => movie.id == id).map(filteredMovie => (
                                <img className='w-[60rem] rounded-md h-60 object-fill' src={filteredMovie.image} alt="" srcset="" />
                            ))

                        }
                    </div>

                    <div className='flex items-center'>
                        <div className='bg-[#D9D9D9] p-2 rounded-full mr-4'>
                            <svg width="28" height="28" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.7 34.2C13.4 32.9 15.3 31.875 17.4 31.125C19.5 30.375 21.7 30 24 30C26.3 30 28.5 30.375 30.6 31.125C32.7 31.875 34.6 32.9 36.3 34.2C37.4667 32.8333 38.375 31.2833 39.025 29.55C39.675 27.8167 40 25.9667 40 24C40 19.5667 38.4417 15.7917 35.325 12.675C32.2083 9.55833 28.4333 8 24 8C19.5667 8 15.7917 9.55833 12.675 12.675C9.55833 15.7917 8 19.5667 8 24C8 25.9667 8.325 27.8167 8.975 29.55C9.625 31.2833 10.5333 32.8333 11.7 34.2ZM24 26C22.0333 26 20.375 25.325 19.025 23.975C17.675 22.625 17 20.9667 17 19C17 17.0333 17.675 15.375 19.025 14.025C20.375 12.675 22.0333 12 24 12C25.9667 12 27.625 12.675 28.975 14.025C30.325 15.375 31 17.0333 31 19C31 20.9667 30.325 22.625 28.975 23.975C27.625 25.325 25.9667 26 24 26ZM24 44C21.2333 44 18.6333 43.475 16.2 42.425C13.7667 41.375 11.65 39.95 9.85 38.15C8.05 36.35 6.625 34.2333 5.575 31.8C4.525 29.3667 4 26.7667 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05 11.65 9.85 9.85C11.65 8.05 13.7667 6.625 16.2 5.575C18.6333 4.525 21.2333 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7667 43.475 29.3667 42.425 31.8C41.375 34.2333 39.95 36.35 38.15 38.15C36.35 39.95 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44Z" fill="#1D1B20" />
                            </svg>

                        </div>
                        <div className='text-black text-lg font-semibold text-wrap'>Naval <br />Ravikant</div>

                    </div>

                </div>

                <h1 className='font-bold text-black text-xl px-4 my-4'>
                    {id ? movies.find(movie => movie.id == id)?.title : ''}
                </h1>

                <div className='px-4 flex items-center mb-4'>
                    <div className='font-semibold w-28'>Ticket Count</div>
                    <div><div class="flex items-center">
                        <button onClick={handleDecrement} class=" py-2 px-4  text-black text-xl">-</button>
                        <span class="text-center w-10 py-1 rounded-md text-white bg-black px-4">{count}</span>
                        <button onClick={handleIncrement} class=" py-2 px-4  text-black">+</button>
                    </div></div>
                </div>
                <div className='px-4 flex items-center mb-4 '>
                    <div className='font-semibold w-28'>Show Time</div>
                    <div className="flex gap-12">
                        {timeSlots.map((slot) => (
                            <div
                                key={slot.time}
                                className={`flex items-center gap-4 p-2 px-4 rounded-md cursor-pointer transition-all duration-300 ${selectedTime === slot.time ? "bg-black text-white" : "bg-[#D9D9D9] text-black"
                                    }`}
                                onClick={() => setSelectedTime(slot.time)}
                            >
                                {slot.icon}
                                <p className="font-semibold">{slot.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='px-4 flex items-center'>
                    <div className='font-semibold w-28'>Date</div>
                    <div>
                        <DatePicker
                            /* defaultValue={today(getLocalTimeZone()).subtract({ days: 1 })} */
                            value={value}
                            onChange={setValue}
                            classNames={{
                                selectorButton: "text-black",
                                inputWrapper: "bg-[#D9D9D9] text-black placeholder-black placeholder:font-semibold text-sm rounded-lg  ",
                            }}
                            selectorButtonPlacement="start" />

                    </div>
                </div>
                <button onClick={handleBooking} type="button" class="focus:outline-none text-white bg-black hover:bg-dark-700 focus:ring-4 focus:ring-white font-medium rounded-lg text-sm px-12 py-2 me-2 mb-2 ml-4 mt-4 ">
                    {/* Book Ticket */}
                    {loading ? <l-ring
                        size="20"
                        stroke="3"
                        bg-opacity="0"
                        speed="2"
                        color="white"
                    ></l-ring> : 'Book Ticket'}
                </button>

            </div>
        </div>

    )
}
