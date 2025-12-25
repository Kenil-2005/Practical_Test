import { X } from "lucide-react";

const NameDetail = ({ formData, setFormData, onClose, onNext }) => {

    return (
        <>
            <div className="w-2/5 bg-red bg-black/90 relative text-white p-12 rounded-2xl flex flex-col justify-between">
                <button
                    className="absolute top-4 right-4 h-4 w-4 flex justify-center items-center border border-white rounded-full"
                    onClick={onClose}
                >
                    <X size={16} />
                </button>
                <div className="text-center flex flex-col gap-4 pb-5">
                    <h1 className="text-md font-normal">Contact Us</h1>
                    <p className="text-2xl font-medium">Get In Touch With Us</p>
                    <div className="text-md font-normal">
                        Get free consultation with a professional
                        <br />
                        real estate consultant.
                    </div>
                </div>
                <div className="py-8">
                    <h1 className="pb-4">Name</h1>
                    <input
                        className="w-full text-white bg-black border border-white rounded py-2 px-3"
                        value={formData.name}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                name: e.target.value
                            });
                        }}
                        placeholder="Enter your Name"
                    />
                </div>
                <button
                    disabled={!formData.name}
                    onClick={onNext}
                    className="py-2 bg-black text-white rounded border border-white"
                >
                    Next
                </button>
            </div>
        </>
    )
}

export default NameDetail;