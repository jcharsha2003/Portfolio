import Image from "next/image";
// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-3 py-8">
          {/* logo */}
          <Link href={'/'}>
            <h1 className="italic hover:not-italic text-xl font-semibold tracking-wide">J.Chandra Harsha</h1>
          </Link>
          {/* socials */}
          <Socials/>
        </div>
      </div>
    </header>
  );
};

export default Header;
