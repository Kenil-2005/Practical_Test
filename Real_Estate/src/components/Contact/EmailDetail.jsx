import { X } from "lucide-react";
import { useState } from "react";

const EmailDetail = ({ formData, setFormData, onClose, onNext, onBack }) => {

    return (
        <>
            <div className="fixed inset-0 bg-black/50  h-screen w-full z-50 flex justify-center items-center">
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
                    <div className="pt-8 pb-4">
                        <h1 className="pb-4">Email</h1>
                        <input
                            className="w-full text-white bg-black border border-white rounded py-2 px-3"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    email: e.target.value
                                });
                            }}
                            placeholder="Enter your email id"
                        />
                    </div>
                    <div className="pb-8">
                        <h1 className="pb-4">Phone Number</h1>
                        <input
                            className="w-full text-white bg-black border border-white rounded py-2 px-3"
                            value={formData.phone}
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    phone: e.target.value
                                });
                            }}
                            placeholder="Enter your Phone Number"
                        />
                    </div>
                    <div className="flex gap-8 items-center m-auto w-full">
                        <button
                            onClick={onBack}
                            className="py-2 bg-black text-white rounded border border-white w-full"
                        >
                            Back
                        </button>

                        <button
                            onClick={() => {
                                if ((formData.phone).length == 10 || (formData.phone).length == 13) {
                                    onNext();
                                } else {
                                    alert("please Enter valid phone number.");
                                }
                            }}
                            className="py-2 bg-black text-white rounded border border-white w-full"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmailDetail;