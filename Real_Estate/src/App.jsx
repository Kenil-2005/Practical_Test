import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import { useState } from "react";
import NameDetail from "./components/Contact/NameDetail";
import EmailDetail from "./components/Contact/EmailDetail";
import Thankspage from "./components/Contact/ThanksPage";

const App = () => {

    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const contactDetail = () => {
        setStep(1);
        console.log(step)
    }

    const onClose = () => {
        setStep(0);
    }

    return (
        <div className="">
            <div>
                <NavBar contactDetail={contactDetail} />
                <HeroSection contactDetail={contactDetail} />
                <Footer />
            </div>
            {step !== 0 &&
                <div className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center">
                    {step == 1 && (
                        <NameDetail
                            formData={formData}
                            setFormData={setFormData}
                            onNext={() => setStep(2)}
                            onClose={onClose}
                        />
                    )}

                    {step == 2 && (
                        <EmailDetail
                            formData={formData}
                            setFormData={setFormData}
                            onNext={() => setStep(3)}
                            onClose={onClose}
                            onBack={() => setStep(1)}
                        />
                    )}

                    {step == 3 && (
                        <Thankspage
                            onClose={onClose}
                        />
                    )}
                </div>
            }
        </div>
    )
}

export default App;
