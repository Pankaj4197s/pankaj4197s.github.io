import { motion } from "framer-motion";
import React from "react";
import { Link as ReactScrollLink } from "react-scroll";

export default function Logo(props) {
  return (
    <>
      <ReactScrollLink
        to="MyName"
        spy={true}
        smooth={true}
        offset={-100}
        duration={200}
      >
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            y: { delay: 1, duration: 0 },
            opacity: { delay: 0.2, duration: 0 },
          }}
          className=" relative h-12 w-10 "
        >
          <motion.span
            initial={{ x: 1 }}
            className="absolute h-full w-full flex justify-center items-center text-lg font-Header text-AAsecondary"
          >
            P
          </motion.span>

          <motion.div
            animate={{ rotate: -30, y: 5 }}
            className="h-1 w-6 rounded bg-AAsecondary"
          ></motion.div>
          <motion.div
            animate={{ rotate: 90, x: -10, y: 18 }}
            className="h-1 w-6 rounded bg-AAsecondary"
          ></motion.div>
          <motion.div
            animate={{ rotate: 30, y: 31 }}
            className="h-1 w-6 rounded bg-AAsecondary"
          ></motion.div>
          <motion.div
            animate={{ rotate: -30, y: 27, x: 19 }}
            className="h-1 w-6 rounded bg-AAsecondary"
          ></motion.div>
          <motion.div
            animate={{ rotate: 30, x: 19, y: -10 }}
            className="h-1 w-6 rounded bg-AAsecondary"
          ></motion.div>
          <motion.div
            animate={{ rotate: 90, x: 28, y: 2 }}
            className="h-1 w-6 rounded bg-AAsecondary"
          ></motion.div>
        </motion.div>
      </ReactScrollLink>
    </>
  );
}
