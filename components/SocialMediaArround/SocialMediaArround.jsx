import { motion } from "framer-motion";
import React from "react";
import data from "../../data/portfolio.json";
import IconClickableWithAnimation from "../Icons/IconClickableWithAnimation";
import GithubIcon from "./GithubIcon";
import InstagramIcon from "./InstagramIcon";
import LinkedinIcon from "./LinkedinIcon";
import YoutubeIcon from "./YoutubeIcon";

const SocialMediaEmail = (props) => {
  return (
    <>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ y: { delay: 0.5, duration: 0.5 } }}
        className="z-10 fixed bottom-0 left-0  hidden lg:flex flex-row px-12 items-center justify-between  "
      >
        <div className="flex flex-col space-y-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center space-y-5">
            <IconClickableWithAnimation
              Icon={GithubIcon}
              href={`https://github.com/${data?.socials.github.url}`}
            />
            <IconClickableWithAnimation
              Icon={LinkedinIcon}
              href={`https://www.linkedin.com/in/${data?.socials.linkedin.url}`}
            />
            <IconClickableWithAnimation
              Icon={InstagramIcon}
              href={`https://www.linkedin.com/in/${data?.socials.linkedin.url}`}
            />
            <IconClickableWithAnimation
              Icon={YoutubeIcon}
              href={`https://www.linkedin.com/in/${data?.socials.linkedin.url}`}
            />
          </div>
          <div className="h-28 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>

      {/* // ? Email Address bar               */}
      <motion.div
        initial={{ y: "170%" }}
        animate={{ y: "0%" }}
        // ! change delay from 0 to 11
        transition={{ y: { delay: 0.5, duration: 0.5 } }}
        className="z-10 fixed bottom-0 right-0 hidden lg:flex flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-24 justify-center items-center">
          {/* Open Email on click */}
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: { y: { duration: 0.1 }, rotate: { duration: 0 } },
            }}
            className=""
          >
            <a
              href={`mailto:${data?.socials.email.url}`}
              target={"_blank"}
              rel="noreferrer"
            >
              <span className=" font-Header tracking-wide text-gray-400 hover:text-AAsecondary hover:cursor-pointer">
                {data?.socials.email.url}
              </span>
            </a>
          </motion.div>

          <div className="h-24 w-0.5 bg-gray-400"></div>
        </div>
      </motion.div>
    </>
  );
};

export default SocialMediaEmail;
