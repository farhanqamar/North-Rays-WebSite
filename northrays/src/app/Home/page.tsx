import Hero from "./Hero";
import contact from "./contact"
const Headers = () => {
  return (
    <>
      <div>
      <video
          autoPlay
          loop
          muted
          className="absolute top-0 z-[-1] w-full h-full object-cover bg-center bg-no-repeat filter blur-xl"
        >
          <source src="/bgvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <Hero />
      </div>
    </>
  );
};

export default Headers;
