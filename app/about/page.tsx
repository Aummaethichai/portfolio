import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
// import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
// image
import profileImage from "../../public/images/profile-picture.jpeg";
const AboutPage = () => {
  return (
    <div className="mx-auto w-full max-w-7xl lg:px-8 max-h-auto sm:px-8 mt-16 sm:mt-32">
      <div className="mx-auto w-full max-w-7xl lg:px-8">
        <div className="static px-4 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
              <div className="lg:pl-20">
                <div className="max-w-xs px-2.5 lg:max-w-none">
                  <Image
                    alt="Maethichai"
                    src={profileImage}
                    className="blur-[3px] rotate-[0.07rad] rounded-xl"
                  />
                </div>
              </div>
              <div className="lg:order-first lg:row-span-2">
                <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                  I’m Maethichai Kobkam.
                </h1>
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
      </div>
    </div>
  );
};

export default AboutPage;
