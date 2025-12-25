import { useEffect, useState } from 'react';
import data from '../../assets/api/property-list-data.json'
import { MapPin, RefreshCcw } from 'lucide-react';

const HeroMain = ({ developer, type, onReset }) => {

    const [currPage, setCurrPage] = useState(1);
    const itemPerPage = 9;
    const properties = data.properties;

    const filteredData = properties.filter((item) => {
        return (
            (developer === "All" || item.developer === developer) &&
            (type === "All" || item.property_type === type)
        );
    });

    // console.log(developer, type);

    useEffect(() => {
        setCurrPage(1);
    }, [developer, type]);

    // console.log(properties.length);
    const totalpage = Math.ceil(filteredData.length / itemPerPage)
    // console.log(totalpage);

    const startIndex = (currPage - 1) * itemPerPage;
    const currData = filteredData.slice(startIndex, startIndex + itemPerPage);

    return (
        <>
            <div className='flex justify-between items-start  text-sm font-bold'>
                <h1>{filteredData.length} properties Found</h1>
                <button
                    onClick={onReset}
                    className='flex gap-2 items-center'
                >
                    <RefreshCcw size={16} />
                    Reset All Filters
                </button>
            </div>
            <div className='border my-8'></div>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {currData.map((currElem) => {
                    return (

                        <div
                            key={currElem.id}
                            className='rounded w-full flex flex-col justify-between gap-6'
                        >
                            <img className='rounded border h-fit w-full' src={currElem.property_image} alt='' />
                            <div className='flex flex-col gap-6'>
                                <div>
                                    <h1 className='font-medium '>{currElem.title}</h1>
                                    <div className='flex gap-4 items-center text-[#B0B0B0] font-normal'>
                                        <p>
                                            By {currElem.developer}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <MapPin />
                                    <p>{currElem.area}</p>
                                </div>
                                <div className='flex gap-y-4 gap-x-2 items-center font-bold text-xl'>
                                    <p>{currElem.currency}</p>
                                    <p>{currElem.property_price}</p>
                                </div>
                            </div>
                            <button
                                // onClick={contactDetail}
                                className='w-full text-lg font-medium border-2 rounded-xl py-2 mx-auto '
                            >
                                Contact
                            </button>
                        </div>

                    );
                })}
            </div>

            <div className="flex justify-center items-center gap-3 pt-16">
                {[...Array(totalpage)].map((_, idx) => {
                    const page = idx + 1;
                    return (

                        <div
                            key={page}
                            onClick={() => setCurrPage(page)}
                            className={`h-12 w-12 flex justify-center items-center rounded-full font-semibold transition 
                            ${page === currPage
                                    ? "bg-black text-white border-black"
                                    : "text-gray-400 border border-gray-400"
                                }`}
                        >
                            {page}
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default HeroMain;