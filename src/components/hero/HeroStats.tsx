interface Stat {
    title : string;
    text : string
}

const HeroStats = ()=>{
    const statsFeatures: Stat[]= [{title:"500+",text:"Happy Customers"},
        {title: "2M+",text:"Messages Sent"},
        {title:"100+",text:"Automation Flows"},
        {title:"99.9%",text:"Uptime"}]
    return(
        <div className="grid grid-cols-2 lg:grid-cols-4  lg:flex-row gap-4  max-w-7xl mx-auto mt-4">
            {statsFeatures.map((stats,index)=>(<div key={index} className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md py-8 px-4 min-h-[110px] ">
                <span className="text-3xl font-bold text-gray-900 ">{stats.title}</span>
                <span className="mt-2 text-sm text-gray-500 text-center">{stats.text}</span>
            </div>))}
        </div>
    )
}
export default HeroStats