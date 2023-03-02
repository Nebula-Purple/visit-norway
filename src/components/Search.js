import React from 'react'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { MdOutlineTravelExplore } from 'react-icons/md'

const Search = () => {
    return (
        <div className='max-w-[1240px] mx-auto my-1 border-2 grid lg:grid-cols-3 gap-4 py-16'>
            <div className='border lg:col-span-2 flex flex-col justify-evenly'>
                <div className='border '>
                    <h2>Holiday in western Norway.</h2>
                    <p className='py-4'>

                        Wherever you choose to go throughout Western Norway, you have the choice to begin your holiday journey in one of two locations.

                        You can either begin your journey in Bergen and eventually make your way to the village of Selje on the agreed date, or  alternatively, you can pick up the camper van in Selje and make your way to Bergen on the agreed day. The choice is entirely yours and subject to availability of camper vans.

                        People often take the boat from Bergen along the coastline to Selje. The journey to Selje is an integral part of your introduction the the fjords, mountain and coast experience.

                        Those ending their journey in Selje will take the boat back to Bergen so that regardless of start point, everyone can get the coastal boat trip of a lifetime.
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 py-4'>
                    <div className='flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <RiCustomerService2Fill size={45} />
                        </button>
                        <div className='border '>
                            <h3 className='py-2'>LENDING SERVICE</h3>
                            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className='border flex flex-col lg:flex-row items-center text-center'>
                        <button>
                            <MdOutlineTravelExplore size={45} />
                        </button>
                        <div className='border'>
                            <h3 className='py-2'>AUTOMATED BOOKING</h3>
                            <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='border text-center'>
                <div>
                    <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                    <p className='py-4'>12 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
                </div>
                <form className='w-full'>
                    <div className='flex flex-col my-2'>
                        <label>Destination</label>
                        <select className='border rounded-md p-2'>
                            <option>Aurora</option>
                            <option>Snow</option>
                            <option>Oslo</option>
                            <option>Rives</option>
                            <option>Lake</option>
                        </select>
                    </div>
                    <div className='flex flex-col my-4'>
                        <label>Check In</label>
                        <input className='border rounded-md p-2' type="date" />
                    </div>
                    <button className='w-full my-4'>Rates & Availabilities</button>
                </form>
            </div>
        </div>
    )
}

export default Search