interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen,}: MobileMenuProps) => {
  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-2 text-2xl cursor-pointer"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
    </div>
  );
};

export default MobileMenu;