import NavItem from "./NavItem";

const navItems: string[] = [
  "Home",
  "Features",
  "Pricing",
  "About Us",
  "Contact",
];

const Navigation = () => {
  return (
    <div className="hidden lg:flex gap-8">
      {navItems.map((item, index) => (
        <NavItem key={index} navItems={item} />
      ))}
    </div>
  );
};

export default Navigation;