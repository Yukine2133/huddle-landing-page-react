import logo from "./images/logo.svg";
import illustration from "./images/illustration-mockups.svg";
import facebook from "./images/logo-facebook.svg";
import twitter from "./images/logo-twitter.svg";
import instagram from "./images/logo-instagram.svg";
import { motion as m } from "framer-motion";
import { slideIn, variants } from "./utils/motion";

function App() {
  return (
    <main className="px-8 py-6 md:px-10 xl:px-14 lg:py-12">
      <header>
        <m.img
          className="w-1/3 md:w-[20%] xl:w-[14%]"
          variants={slideIn("up", 0.4)}
          animate="show"
          initial="hidden"
          src={logo}
        />
      </header>
      <article className=" pt-16 grid lg:grid-cols-2">
        <section>
          <m.img
            className="w-full md:w-1/2 lg:w-full mx-auto lg:mx-0 lg:pt-24 xl:pt-0"
            variants={slideIn("left", 0.5)}
            initial="hidden"
            animate="show"
            src={illustration}
          />
        </section>
        <section className="pt-20  lg:pl-10 mx-20">
          <m.h1
            variants={slideIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="font-semibold text-center lg:text-left lg:w-full  2xl:w-2/3   xl:leading-[3rem] mb-5 md:mb-3 text-2xl lg:text-3xl"
          >
            Build The Community Your Fans Will Love
          </m.h1>
          <m.p
            variants={slideIn("right", 0.7)}
            initial="hidden"
            animate="show"
            className="font-opensans text-center lg:text-left   2xl:w-[61%]"
          >
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </m.p>
          <div className="flex lg:justify-start justify-center">
            <m.button
              variants={slideIn("right", 0.8)}
              initial={{ opacity: 0, x: "50%" }}
              animate="show"
              className="bg-white  hover:bg-soft-magenta hover:text-white hover:text-opacity-100 transition-colors px-16 lg:px-14 py-3 text-black shadow-sm shadow-black text-opacity-60 rounded-full duration-300 mt-6"
            >
              Register
            </m.button>
          </div>
        </section>
      </article>
      <m.div
        variants={variants.container}
        initial="hidden"
        animate="show"
        className="flex gap-4 justify-center mt-20 lg:justify-end xl:mt-0 transform lg:translate-y-24 xl:translate-y-36 "
      >
        <m.img
          variants={variants.children}
          className="h-10 w-10"
          src={facebook}
        />
        <m.img
          variants={variants.children}
          className="h-10 w-10"
          src={twitter}
        />
        <m.img
          variants={variants.children}
          className="h-10 w-10"
          src={instagram}
        />
      </m.div>
    </main>
  );
}

export default App;
