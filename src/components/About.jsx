import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-[80vh] px-4 sm:px-6 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex justify-center md:justify-start"
        >
          <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border border-[#cfd6e6] bg-white/70 shadow-sm">
            <img
              src="/navbar.jpg"
              alt="Sachin Chandran profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#5a627f] leading-relaxed"
          >
            I began my career in engineering, where precision, safety, and
            structured problem-solving were part of everyday work. That mindset
            still shapes how I build software today, focusing on clarity,
            reliability, and solutions that hold up beyond the demo stage.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="text-[#5a627f] leading-relaxed mt-4"
          >
            I now build responsive web applications using React, JavaScript, and
            modern frontend tools, while expanding into backend development with
            Node.js and API design. My focus is writing maintainable code,
            improving performance, and creating smooth user experiences from
            concept to deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-5 flex flex-wrap gap-2"
          >
            {[
              "React.js",
              "Context API",
              "useReducer",
              "Shopify",
              "Redux",
              "PWA",
              "Code Splitting",
              "MongoDB",
              "Express.js",
              "Node.js",
              "Socket.IO",
              "Razorpay",
              "AWS EC2",
            ].map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1 rounded-full bg-white/65 border border-[#cfd6e6] text-[#2b3351]"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
          >
            <a
              href="https://github.com/Sachi0001"
              target="_blank"
              rel="noreferrer"
              className="bg-white/70 px-4 sm:px-5 py-2 rounded-lg border border-[#cfd6e6] text-[#1f2947] hover:bg-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sachin-chandran-767b43198"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1f2947] text-white px-4 sm:px-5 py-2 rounded-lg hover:bg-[#16203b] transition"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
