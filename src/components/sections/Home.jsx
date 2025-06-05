import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent leading-right">
            Hi, I'm Akshay Kumar
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-2-lg mx-auto">
            I'm a full-stack developer with a passion for creating dynamic,
            aesthetically pleasing and clean web applications. My expertise lies
            in building robust backends and crafting intuitive frontends,
            ensuring a seamless user experience. I'm open to new oppurtunities
            and challenges that help to enhance my skillset. My goal is to build
            solutions that help out people in making their lives easier and more
            efficient. Whether it's through innovative web applications or
            engaging user interfaces, I strive to make a positive impact on this
            industry and world through my work.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
