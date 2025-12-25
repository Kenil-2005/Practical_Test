import { useState } from "react";

const HeroFilter = ({ developer, setDeveloper, type, setType }) => {

    return (
        <>
            <div className="flex gap-2 justify-center items-center py-14">
                <div className="text-center">
                    <h1 className="pb-2 font-medium tracking-[.2rem]">Devloper</h1>
                    <div className="border rounded p-2.5">
                        <select
                            value={developer}
                            onChange={(e) => {
                                setDeveloper(e.target.value)
                            }}
                            className="border-none outline-none"
                        >
                            <option className="bg-black text-white">All</option>
                            <option className="bg-black text-white">Union Properties</option>
                            <option className="bg-black text-white">Meraas</option>
                            <option className="bg-black text-white">Dubai Properties</option>
                            <option className="bg-black text-white">Emaar Properties</option>
                            <option className="bg-black text-white">Nakheel</option>
                            <option className="bg-black text-white">Dubai Silicon Oasis Authority</option>
                            <option className="bg-black text-white">Jumeirah Golf Estates</option>
                            <option className="bg-black text-white">Al Barari Developers</option>
                            <option className="bg-black text-white">DAMAC Properties</option>
                        </select>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="pb-2 font-medium tracking-[.2rem]">Type</h1>
                    <div className="border rounded p-2.5 ">
                        <select
                            value={type}
                            onChange={(e) => {
                                setType(e.target.value)
                            }}
                            className="border-none outline-none"
                        >
                            <option className="bg-black text-white">All</option>
                            <option className="bg-black text-white">Apartment</option>
                            <option className="bg-black text-white">Villa</option>
                            <option className="bg-black text-white">Townhouse</option>
                            <option className="bg-black text-white">Penthouse</option>
                            <option className="bg-black text-white">Duplex</option>
                            <option className="bg-black text-white">Residence</option>
                        </select>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HeroFilter;