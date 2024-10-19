import Hero from "./Hero";
import AboutUs from "./AboutUs";
import Services from "./Services";
import Footer from "./Footer";
import Featured from "./Featured";
import Contact from "./Contact";
const Headers = () => {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Featured />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Headers;
