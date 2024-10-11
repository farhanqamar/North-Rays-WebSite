import Navbar from "@/components/Navbar";
import Hero from "./Hero";



const Header = () => {
  return (
    <>
      <div>
        <header>
            {/* Navbar */}
            <Navbar />
            {/* Hero */}
          <div>
            <Hero />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;