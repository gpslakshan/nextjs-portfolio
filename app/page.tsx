import Image from "next/image";
import heroImage from "@/public/images/hero.png";
import "@/app/animations.css";

const Home = () => {
  return (
    <section className="relative h-screen overflow-hidden z-10">
      <div className="p-3 h-screen lg:flex lg:flex-row-reverse lg:items-center lg:space-x-3">
        <div className="w-full flex justify-center lg:w-1/2 xl:w-1/3">
          <Image
            src={heroImage}
            alt="hero image"
            height={400}
            className="z-20"
          />
        </div>
        <div className="max-lg:mt-5 lg:pl-4 lg:w-1/2 xl:w-2/3">
          <p className="text-[36px] leading-[40px] md:text-[45px] md:leading-[48px] lg:text-[60px] lg:leading-[60px] max-lg:text-center font-medium">
            Hi! I'm Sachin. A{" "}
            <span className="text-blue-600 font-semibold">
              Software Engineer{" "}
            </span>
            from Sri Lanka.
          </p>
          <p className="max-lg:text-center md:text-lg mt-3">
            Let's turn ideas into reality and shape the future of technology
            together.
          </p>
          <div className="w-full flex flex-row max-lg:justify-center space-x-2 mt-5">
            <button className="btn-primary">Projects</button>
            <button className="btn-primary">Let's Talk</button>
          </div>
        </div>
      </div>
      <ul className="bg-squares">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
};

export default Home;
