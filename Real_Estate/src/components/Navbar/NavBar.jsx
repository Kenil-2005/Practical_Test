const NavBar = ({ contactDetail }) => {
    return (
        <div className="bg-black text-white flex justify-between items-center px-20 py-4">
            <h1 className="text-3xl text-gray-400 font-normal">Dev.</h1>
            <div className="flex gap-15 text-md uppercase">
                <div>Home</div>
                <div>Listing</div>
                <div>About Us</div>
            </div>
            <button
                onClick={contactDetail}
                className="border-2 py-2 px-4 rounded-xl"
            >
                Contact
            </button>
        </div>
    )
}

export default NavBar;