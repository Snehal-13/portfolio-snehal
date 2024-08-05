import { cn } from "@/lib/utils";
import { GlobeDemo } from "../GridGlobe";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  description2?: string | React.ReactNode;
  description3?: string | React.ReactNode;
  description4?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="h-full">
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 1 && (
            
            <div className="object-center object-cover">
               <div className="font-sans text-2xl font-bold max-w-96 z-10 text-left justify-left mb-3 -mt-10">
                {title}
              </div>
              <div className="font-sans font-semibold text-white text-sm md:text-xs lg:text-base z-10 mb-4 text-justify">
                <h1>As a <span className="text-purple font-semibold">Tools Development Intern at NVIDIA</span>, I worked with the Quality Engineering team to <span className="text-purple font-semibold ">automate test cases</span> for <span className="text-purple font-semibold">self driving cars</span>. I also worked as <span className="text-purple font-semibold">SWE Intern</span> at <span className="text-purple font-semibold">Persistent Systems</span> wherein I received comprehensive training on various technologies like <span className="text-purple font-semibold">Java, DBMS, DSA, Git, SQL, SDLC, Angular, NodeJS, HTML, CSS, Javascript and Typescript.</span>
                </h1>
              </div>
              <div className="font-sans font-semibold text-white text-sm md:text-xs lg:text-base z-10 mb-4 text-justify">
                <h1>Additionally, I served as the <span className="text-purple font-semibold">Google Developer Lead</span> at Google Developer Student Clubs, <span className="text-purple font-semibold">organizing workshops and events to teach Google technologies</span>. I have a strong interest in Google Cloud and Web Development.
                </h1>
              </div>
              <div className="font-sans font-semibold text-[#e3e4f7] text-sm md:text-xs lg:text-base z-10 mb-4 text-justify">
                <h1>I have experience in <span className="text-purple font-semibold">Web Development</span>, creating responsive websites with HTML, CSS, JavaScript, Angular, React and NodeJS. Moreover, As a <span className="text-purple font-semibold">UI/UX designer</span> I'm proficient in <span className="text-purple font-semibold">Figma, Adobe XD, and Canva.</span> I am passionate about coding and skilled in <span className="text-purple font-semibold">C++, Java, Python, Data Structures and Algorithms, AI, and Design and Analysis of Algorithms.</span>
                </h1>
              </div>
                <div className="font-sans font-semibold text-[#e3e4f7] text-sm md:text-xs lg:text-base mb-4 text-justify">
                  <h1>I have excelled in events like <span className="text-purple font-semibold">Smart India Hackathon</span> and <span className="text-purple font-semibold">NEC conducted IIT-Bombay</span> and published a book on digital marketing on Kindle. <span className="text-purple font-semibold">My goal is to leverage my skills to create innovative solutions and contribute to technological advancements.</span> I'm always eager to learn and explore new technologies.
                  </h1>
                </div>
                {/* <div className=" sm:w-[30%] sm:h-[30%] w-[50%] h-[50%] absolute bottom-0 right-0 ">
                  {img && (
                    <img
                      src={img}
                      alt={img}
                      className={cn(imgClassName)}
                    />
                  )}
                </div> */}
                <div className="w-full opacity-50 h-full absolute bottom-0 right-0" >
                  {spareImg && (
                    <img
                      src={spareImg}
                      alt={spareImg}
                      className={cn(imgClassName, "object-cover, object-center")}
                    />
                  )}
                  </div>
            </div>
          )}
          {id === 3 && (
            <>
              <div className="font-sans lg:text-2xl text-xl font-bold max-w-96 z-10 text-left justify-left">
                {title}
              </div>
              <GlobeDemo />
            </>
          )}
           {id === 2 && (
            <>
              <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                {description}
              </div>
              <div className="font-sans text-2xl font-bold max-w-96 z-10">
                {title}
              </div>
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 opacity-20">
                {/* <div className="flex flex-col gap-3 lg:gap-8 animate-marquee-infinite"> */}
                <div className="flex flex-col gap-3 lg:gap-8">
                  {["Angular", "Node.js", "React.js"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] animate-marquee-infinite"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E] animate-marquee-infinite" />
                </div>

                {/* <div className="flex flex-col gap-3 lg:gap-8 animate-marquee-infinite"> */}
                <div className="flex flex-col gap-3 lg:gap-8">
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E] animate-marquee-infinite" />
                  {["Python", "AI/ML", "UI/UX"].map((item) => (
                    <span
                      key={item}
                      className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base rounded-lg text-center bg-[#10132E] animate-marquee-infinite"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
