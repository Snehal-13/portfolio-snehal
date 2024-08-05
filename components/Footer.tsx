import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full mt-40 pb-10 sd:mb-[60px]" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <div className="flex flex-row gap-x-4 pt-5 cursor-pointer">
          <a href="mailto:snehalbharsakle054@gmail.com">
            <MagicButton
              title="Email Me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <div className="flex items-center gap-2 md:gap-3 lg:gap-6">
            {socialMedia.map((info) => (
              <Link href={info.link}
                key={info.id}
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] rounded-lg border border-black-300"
              >
                <img src={info.img} alt="icons" width={28} height={28} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col md: text-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Snehal Bharsakle
        </p>
      </div>
    </footer>
  );
};
export default Footer;
