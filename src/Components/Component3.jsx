/* eslint-disable react/no-unescaped-entities */
function Component3() {
  return (
    <div className=" flex flex-col gap-10 justify-center py-10 ">
      <div className=" border-2 px-5 py-5   rounded-md">
        <div className="heading1 flex justify-center">About Me</div>
        <div className="about">
          <p>
            I'm a passionate full-stack developer specializing
            in creating scalable, user-friendly web applications. With a strong
            foundation in the MERN stack and experience in building innovative
            solutions, I love tackling challenges and bringing ideas to life
            through code. I’m constantly learning and exploring new technologies
            to deliver impactful projects that make a difference. When I’m not
            coding, you’ll find me exploring tech trends or working on personal
            projects to hone my skills. Let’s build something amazing together!
          </p>
        </div>
      </div>
      <div className=" px-5 py-5  border-2   rounded-md">
        <div className="heading1 flex justify-center">Work Experience</div>
        <div className="flex justify-between">
          <div className="text-lg">System Engineer</div>
          <div className="rounded-lg bg-emerald-200 text-sm px-2 py-1">
            Full Time
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-stone-400">Infosys Limited (Mysuru)</div>
          <div>Dec 2022 - Present</div>
        </div>
      </div>
      <div className=" border-2   px-5 py-5  rounded-md">
        <div className="heading1 flex justify-center">Education</div>
        <div className="text-lg">Bachelor in Electronics and Communication</div>
        <div className="flex justify-between">
          <div className="text-stone-400">SRMSCET Bareilly</div>
          <div>July 2018 - July 2022</div>
        </div>
      </div>
      <div className="flex flex-col gap-12  border-2 px-5 py-5  rounded-md">
        <div className="flex flex-col items-center">
          <div className="heading1 flex justify-center">Tech Stack</div>
          <div className="flex justify-center">Technologies I have been working with recently</div>
        </div>

        <div className="flex flex-wrap gap-10 md:flex justify-center">
          <img
            className="hover:scale-110 hover:translate-y-3 transition easy-in-out duration-200"
            width={"90px"}
            src="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
          />
          <img
            className="hover:scale-110 hover:translate-y-3 transition easy-in-out duration-200"
            width={"90px"}
            src="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
          />
          <img
            className="hover:scale-110 hover:translate-y-3 transition easy-in-out duration-200"
            width={"90px"}
            src="https://upload.vectorlogo.zone/logos/javascript/images/806c2e30-cf85-4b36-81bb-037049603c34.svg"
          />
          <img
            className="hover:scale-110 hover:translate-y-3 transition easy-in-out duration-200"
            width={"90px"}
            src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          />
          <img
            className="hover:scale-110 hover:translate-y-3 transition easy-in-out duration-200"
            width={"90px"}
            src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
          />
          <img
            className="hover:scale-110 hover:translate-y-3 transition easy-in-out duration-200"
            width={"90px"}
            src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
          />
          <img
            className="hover:scale-110 hover:translate-y-3 transition easy-in-out duration-200"
            width={"90px"}
            src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
          />
          <img
            className="hover:scale-110 hover:translate-y-3 transition easy-in-out duration-200"
            width={"90px"}
            src="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
          />
          <img
            className="hover:scale-110 hover:translate-y-3 transition easy-in-out duration-200"
            width={"90px"}
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg"
          />
          <img
            className="hover:scale-110 hover:translate-y-3 transition easy-in-out duration-200"
            width={"90px"}
            src="https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-8   border-2 py-8 px-5 rounded-md">
        <div className="heading1 flex justify-center">Projects</div>
        <div className="flex gap-5  lg:flex-row sm:flex-col">
          <div className="w-1/2 h-full border-2 rounded-lg py-2 px-2   hover:border-gray-950">
            <div className="font-bold">Connect</div>
            <div className="text-wrap">
              A messaging web app where a person can login and do one-to-one
              chat and also make rooms and chill.
            </div>
            <div>
              Tech stack: ReactJS, NodeJS, ExpressJS, TailwindCSS, Socket.IO,
              JWT, Cookies
            </div>
            <div className="flex h-5 gap-1">
              <img src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png" />
              <a
                className="text-cyan-500"
                href="https://github.com/acoderone/Connect"
              >
                Github Link
              </a>
            </div>
          </div>
          <div className="w-1/2 h-full border-2 rounded-lg py-2 px-2  hover:border-gray-950">
            <div className="font-bold">Course Selling App</div>
            <div className="text-wrap">
              In this app admin can add , remove ,edit the courses and client
              can purchase that.
            </div>
            <div>Tech stack: ReactJS, NodeJS, ExpressJS, TailwindCSS, JWT</div>
            <div className="flex h-5 gap-1">
              <img src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png" />
              <a
                className="text-cyan-500"
                href="https://github.com/acoderone/Connect"
              >
                Github Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component3;
