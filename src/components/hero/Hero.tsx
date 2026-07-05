import HeroBadge from "./HeroBadge"
import HeroButtons from "./HeroButtons"
import HeroDescription from "./HeroDescription"
import HeroImage from "./HeroImage"
import HeroStats from "./HeroStats"
import HeroTitle from "./HeroTitle"


const Hero =()=>{
    return(
        <div className="w-full mt-14 px-8">
           <div className=" max-w-7xl mx-auto flex flex-col lg:flex-row  px-5 items-start gap-4">
                <div className="hero-left flex flex-col gap-5 lg:basis-[40%] max-w-xl mx-auto lg:mx-0">
                    <HeroBadge/>
                    <HeroTitle/>
                    <HeroDescription/>
                    <HeroButtons/>
                   

                </div>
            <div className="lg:basis-[60%]">
                <HeroImage/>
            </div>
                
           </div>
            <HeroStats/>
        </div>
    )
}

export default Hero