const HeaderButtons = ()=>{
    return(
        <div className="hidden lg:block" >
            <div className="flex gap-3 ">
                <button className="border-1 text-slate-600 px-5 py-2 rounded-md shadow-sm font-semibold hover:bg-violet-100 hover:text-violet-600 transition-all duration-300">Login</button>
                <button className=" bg-indigo-600  px-4 py-2.5 text-white rounded-md font-semibold shadow-sm  hover:text-slate-800 transition-all duration-300 ">Get Started</button>
            </div>
        </div>
    )
}
export default HeaderButtons