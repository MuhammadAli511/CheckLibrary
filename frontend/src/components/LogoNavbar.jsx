import { CheckLibraryLogo } from "../assets";

const LogoNavbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-6">
      <div className="flex items-center">
        <img className="h-8 w-auto sm:h-10 sm:w-auto md:h-12 md:w-auto" src={CheckLibraryLogo} alt="Logo" />
      </div>
    </nav>
  );
};

export default LogoNavbar;
