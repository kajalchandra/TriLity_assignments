const HeroButtons =()=>{
 const features: string[] = [
    "14-Day Free Trial",
    "No Credit Card",
    "Easy Setup",
    ];
    return(
        <div className="flex flex-col gap-5">
            <div className="flex flex-col min-[600px]:flex-row gap-4">
                <button className="text-white bg-indigo-600 px-5 py-2 rounded-md shadow-sm font-semibold">Get Started Free </button>
                <button className="text-gray-800 bg-gray-100 shadow-sm px-5 py-1 rounded-lg font-semibold border-gray-500">See Features</button>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-start sm:items-center text-gray-500">
                {features.map((item,index) => (
  <span key={index} className="flex items-center gap-2 text-sm text-gray-500">
    <span className="text-violet-500">✓</span>
    {item}
  </span>
))}
            </div>
        </div>
        
    )
}
export default HeroButtons