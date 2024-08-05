import React from "react";
import { Button } from "./ui/MovingBorder";
import { Education, workExperience } from "@/data";

const Resume = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black-100">
      <div className="w-full px-10 py-9">
        <main className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Education Section */}
          <section className="col">
            <header className="pl-8 pb-5 font-sans text-xl font-medium text-purple text-center">
              <h1>EDUCATION</h1>
            </header>
            {/* <Button
                   key={card.id}
                   duration={Math.floor(Math.random() * 10000 + 10000)}
                   borderRadius='1.75rem' */}
            <div className="relative pl-8 border-l-2 border-purple">
              {/* <div className="relative mb-5 px-5 py-5 bg-black-100 border cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-purple">
                <div className="absolute top-0 right-[calc(100%_+_22px)] w-4 h-4 bg-black-100 rounded-full border-2 border-purple"></div>
                <h4 className="relative text-purple">2018 - 2022</h4>
                <h3 className="pt-2 pb-1 font-sans text-lg text-purple text-bold">High School Degree</h3>
                <p className="text-white text-sm leading-tight text-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p> 
               </div> */}
              <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10">
                {Education.map((card) => (
                  <Button
                    key={card.id}
                    //   random duration will be fun , I think , may be not
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius="1.75rem"
                    style={{
                      //   add these two
                      //   you can generate the color from here https://cssgradient.io/
                      background: "rgb(4,7,29)",
                      backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                      // add this border radius to make it more rounded so that the moving border is more realistic
                      borderRadius: `calc(1.75rem* 0.96)`,
                    }}
                    // remove bg-white dark:bg-slate-900
                    className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                      <img
                        src={card.thumbnail}
                        alt={card.thumbnail}
                        className="lg:w-32 md:w-20 w-16"
                      />
                      <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                          {card.title}
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="col">
            <header className="pl-8 pb-5 font-sans text-xl font-medium text-purple tc">
              <h1>EXPERIENCE</h1>
            </header>
            <div className="relative pl-10 border-r-2 border-black-100">
              <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10">
                {workExperience.map((card) => (
                  <Button
                    key={card.id}
                    //   random duration will be fun , I think , may be not
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius="1.75rem"
                    style={{
                      //   add these two
                      //   you can generate the color from here https://cssgradient.io/
                      background: "rgb(4,7,29)",
                      backgroundColor:
                        "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                      // add this border radius to make it more rounded so that the moving border is more realistic
                      borderRadius: `calc(1.75rem* 0.96)`,
                    }}
                    // remove bg-white dark:bg-slate-900
                    className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                  >
                    <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                      <img
                        src={card.thumbnail}
                        alt={card.thumbnail}
                        className="lg:w-32 md:w-20 w-16"
                      />
                      <div className="lg:ms-5">
                        <h1 className="text-start text-xl md:text-2xl font-bold">
                          {card.title}
                        </h1>
                        <p className="text-start text-white-100 mt-3 font-semibold">
                          {card.desc}
                        </p>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resume;
