import { useState } from "react";
import HeroFilter from "./HeroFilter";
import HeroMain from "./HeroMain";
import HeroText from "./HeroText";

const HeroSection = ({contactDetail}) => {
    const [developer, setDeveloper] = useState("All");
    const [type, setType] = useState("All");
    

    const resetFilter = () => {
        setDeveloper = "All";
        setType = "All";
    };

    return (
        <>
            <div className="py-24 px-20 ">
                <HeroText />
                <HeroFilter
                    developer={developer}
                    setDeveloper={setDeveloper}
                    type={type}
                    setType={setType}
                />
                <HeroMain
                    developer={developer}
                    type={type}
                    onReset={resetFilter}
                    contactDetail={contactDetail}
                />
                
            </div>
        </>
    )
}

export default HeroSection;