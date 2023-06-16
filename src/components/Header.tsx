export const Header = () => {
  return (
    <header className="top-0 left-0 fixed pl-4 pr-4 pt-2 bg-transparent flex justify-between items-center z-30 w-screen">
      <a href="index.html" className="relative text-2xl text-[#ededed] font-semibold">
        HOME PLUS
      </a>
      <div className="w-3 h-3">
        <i className="bx bx-menu" id="close-icon"></i>
      </div>
      <nav className="navbar hidden">
        <a href="#kup">KUP</a>
        <a href="sprzedaj.html">SPRZEDAJ</a>
        <a href="#WYNAJMIJ">WYNAJMIJ</a>
        <a href="#NIERUCHOMOŚCI">NIERUCHOMOŚCI</a>
        <a href="kontakt.html">KONTAKT</a>
      </nav>
    </header>
  );
};
