"use client";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
// import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
// image
import profileImage from "../../public/images/profile-picture.jpeg";
import BlurText from "../components/BlurText/BlurText";
import LogoLoop from "../components/LogoLoop/LogoLoop";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiPython, SiCss3, SiHtml5, SiRedis, SiMinio, SiMariadb, SiGoland, SiGithub, SiDocker } from 'react-icons/si';
// import { useState } from "react";
// import DecryptedText from "../components/DecryptedText/DecryptedText";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiHtml5 />, title: "HTML5", href: "https://html.spec.whatwg.org/multipage/" },
  { node: <SiCss3 />, title: "CSS3", href: "https://www.w3.org/Style/CSS/Overview.en.html" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMariadb />, title: "MariaDB", href: "https://mariadb.org" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiMinio />, title: "Minio", href: "https://min.io" },
  { node: <SiRedis />, title: "Redis", href: "https://redis.io" },
  { node: <SiGoland />, title: "Go", href: "https://golang.org" },
  { node: <SiGithub />, title: "GitHub", href: "https://github.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
];

const AboutPage = () => {
  // const [textLine1Done, setTextLine1Done] = useState(false);
  return (
    <div className="flex mx-auto w-full max-w-7xl lg:px-8 max-h-auto sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="static px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <Image
                    alt="Maethichai"
                    src={profileImage}
                    // className="blur-[3px] rotate-[0.07rad] rounded-xl"
                    className="rotate-[0.07rad] rounded-xl"
                  />
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                {/* <DecryptedText
                  text="I'm Maethichai              Kobkam"
                  animateOn="view"
                  revealDirection="start"
                  sequential={true}
                  maxIterations={10}
                  className="text-4xl font-bold mb-8 tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 text-wrapper hover:text-teal-500"
                /> */}
                <BlurText
                  text="I'm Maethichai"
                  delay={30}
                  animateBy="letters"
                  direction="top"
                  // onAnimationComplete={() => setTextLine1Done(true)}
                  className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 text-wrapper"
                />
                {/* <div
                  className={`
                    transition-opacity duration-500
                    ${
                      textLine1Done
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }
                  `}
                >
                  <BlurText
                    text="Kobkam"
                    delay={30}
                    animateBy="letters"
                    direction="top"
                    className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 text-wrapper"
                  />
                </div> */}
                 <BlurText
                    text="Kobkam"
                    delay={30}
                    animateBy="letters"
                    direction="bottom"
                    className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100 text-wrapper"
                  />
                <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                  <p className="leading-7">
                    I’m currently working as a{" "}
                    <strong>Software Engineer (Backend)</strong> with over 1
                    year of professional experience.
                    <br />
                    Previously, I interned as a{" "}
                    <strong>Frontend Engineer</strong> and had the opportunity
                    to work on <strong>Full Stack</strong> projects as well.
                    <br />
                    These experiences gave me a solid understanding of both
                    frontend and backend development.
                    <br />
                    <br />
                    I’m passionate about system design, API development, and
                    improving application performance.
                    <br />
                    I also enjoy learning new technologies and building side
                    projects to strengthen my skills.
                    <br />
                    <br />
                    <strong>Tech Stack:</strong> Node.js, Express, PostgreSQL,
                    MongoDB, React, Docker
                  </p>
                </div>
              </div>
              <div className="lg:pl-20">
                <div className="flex flex-col gap-4 pb-6">
                  <div>
                    <li className="flex items-center hover:text-teal-500 dark:hover:text-teal-400 cursor-pointer">
                      <a
                        href="https://www.linkedin.com/in/maethichai-kobkam-331585300/"
                        target="_blank"
                      >
                        <LinkedInIcon></LinkedInIcon>
                        <span className="pl-2 text-sm">Follow on LinkedIn</span>
                      </a>
                    </li>
                  </div>
                  <div>
                    <li className="flex items-center hover:text-teal-500 dark:hover:text-teal-400 cursor-pointer">
                      <a href="https://github.com/Aummaethichai" target="blank">
                        <GitHubIcon></GitHubIcon>
                        <span className="pl-2 text-sm">Follow on GitHub</span>
                      </a>
                    </li>
                  </div>
                  <span className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 flex"></span>
                  <div>
                    <li className="flex items-center hover:text-teal-500 dark:hover:text-teal-400 cursor-pointer">
                      <a href="mailto:maethichai8968@gmail.com">
                        <EmailIcon></EmailIcon>
                        <span className="pl-2 text-sm">
                          maethichai8968@gmail.com
                        </span>
                      </a>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: '100px', position: 'relative', overflow: 'hidden', marginTop: '50px' }}>
          <LogoLoop
            logos={techLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
