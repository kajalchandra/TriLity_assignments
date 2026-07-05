import heroImage from "../../assets/heroImage.png";
const HeroImage = ()=>{

    return(
        <div className="flex  justify-center lg:justify-end">
           <img src={heroImage} className="w-full max-w-[700px] h-auto "></img>
        </div>
    )
}
export default HeroImage