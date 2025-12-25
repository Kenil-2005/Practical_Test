import { X } from "lucide-react";

const Thankspage = ({ onClose }) => {
    return (
        <>
            <div className="w-2/5 bg-red bg-black/90 relative text-center text-white p-16 rounded-2xl flex flex-col justify-between gap-4">
                <button
                    className="absolute top-4 right-4 h-4 w-4 flex justify-center items-center border border-white rounded-full"
                    onClick={onClose}
                >
                    <X size={16} />
                </button>
                <div className="flex flex-col gap-3">
                    <h1 className="tracking-wider text-md">Thank You for Connecting!</h1>
                    <p className="tracking-widest text-3xl font-normal">
                        We appreciate your interest
                        <br />
                        and will be in touch soon
                    </p>
                    <p className="tracking-wider text-md">
                        In the meantime, feel free to browse our website
                        <br />
                        to learn more about our offerings.
                    </p>
                </div>
                <button
                    onClick={onClose}
                    className="py-4 pt-8 text-lg"
                >
                    Explore more &#62;
                </button>
            </div>
        </>
    )
}

export default Thankspage;