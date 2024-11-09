import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="text-gray-600 body-font md:justify-center sticky">
      <section className="container mx-auto flex flex-wrap p-5 flex-col justify-center items-center md:flex-row md:justify-between">

        {/* Logo Section Code*/}
        <div
          className="flex title-font font-medium items-center mt-2 md:ml-0 lg:ml-12 md:justify-center text-gray-900 md:mb-0"
        >
          <Image
            src="/logo-p.jpeg"
            alt="logo"
            width={120}
            height={120}
            className="rounded-full hover:scale-125 transition-all duration-500 ease"
          />
        </div>

        {/* Nav bar code */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 text-white hover:-translate-y-1 ">
            Home
          </Link>
          <Link href="/about" className="mr-5 text-white hover:-translate-y-1">
            About
          </Link>
          <Link
            href="/skills"
            className="mr-5 text-white hover:-translate-y-1"
          >
            Skills
          </Link>
          <Link href="/contact" className="mr-5 text-white hover:-translate-y-1">
            Contact
          </Link>
        </nav>

        {/* Download Button */}
        <div className="mt-2 lg:mr-8">
          <button className="inline-flex justify-center items-center border-0 px-4 focus:outline-none h-7 bg-gray-200 hover:bg-gray-500 hover:text-gray-100 transition-all duration-500 ease rounded text-base">
            Download CV
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </header>
  );
};

export default Header;
