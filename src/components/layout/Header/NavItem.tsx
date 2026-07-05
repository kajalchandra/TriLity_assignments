interface NavItemsProps {
    navItems: string;
}

const NavItems = ({ navItems }: NavItemsProps) => {
    return (
        <div className="group">
            <p className="text-slate-600 font-medium hover:text-indigo-600 transition-all duration-300 cursor-pointer">
                {navItems}
            </p>
            <div className="h-[2px] w-0 group-hover:w-full bg-indigo-600 transition-all duration-300"></div>
        </div>
    );
};

export default NavItems;