import React, { useEffect, useState } from "react";
import { Link } from "react-router";

function HomePage() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div className="w-[95%] md:w-[85%] mx-auto p-[20px]">
      <div className="initial-stats mb-5">
        <a href="https://wakatime.com/@018b4611-a564-4d30-8231-dd09a94eb959">
          <img
            align="left"
            src="https://wakatime.com/badge/user/018b4611-a564-4d30-8231-dd09a94eb959.svg"
          />
        </a>

        <a href="https://komarev.com/ghpvc/?username=muhammadalazadheera">
          <img
            align="right"
            src="https://komarev.com/ghpvc/?username=muhammadalazadheera&label=Visitors&color=0e75b6&style=flat"
          />
        </a>
      </div>

      <div id="hero-sesction" className="mt-[30px]">
        <div className="rounded-full w-[150px] h-[150px] outline-2 outline-offset-2 shadow-sm mb-3 shadow-[#2ea44f] outline-[#2ea44f] mx-auto overflow-hidden">
          <img
            className="mx-auto w-full"
            src="https://i.ibb.co.com/gbWCqXyP/Hira.jpg"
            alt=""
          />
        </div>
        <h3
          className="text-2xl md:text-3xl my-1 text-center text-[#7e76f1]"
          align="center"
        >
          <samp>
            &gt; Hey There!, I am &nbsp;
            <br />
            <b>
              <a href="https://muhammadalazadheera.github.io" target="_blank">
                Al Azad Heera
              </a>
            </b>
          </samp>
        </h3>
        <p className="text-center text-[#2ea44f]">
          <samp>
            I am a full stack web application developer from <b>Bangladesh</b>
          </samp>
        </p>
        <p align="center" className="">
          <a href="https://git.io/typing-svg">
            <img
              className="img"
              src="https://readme-typing-svg.demolab.com?font=&duration=3000&pause=1000&color=2ea44f&center=true&vCenter=true&random=false&width=435&lines=Fullstack+Developer;Laravel;MERN+STACK;MEVN+STACK"
            />
          </a>
        </p>
        <p align="center" className="mb-5">
          <samp>
            <a
              className="text-xl"
              target="_blank"
              href="https://drive.google.com/file/d/1y46iOgQORcI530H02cnBQnyfObV2QKdm/view?usp=sharing"
            >
              「 Download CV 」
            </a>
          </samp>
        </p>
        <p align="center">
          <a href="https://linkedin.com/in/muhammadalazadheera" target="_blank">
            <img
              className="inline-block md:mx-1 m-1"
              src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
              alt="muhammadalazadheera"
            />
          </a>
          <a
            href="https://www.facebook.com/muhammadalazadheera/"
            target="_blank"
          >
            <img
              className="inline-block md:mx-1 m-1"
              src="https://img.shields.io/badge/Facebook-20BEFF?&style=for-the-badge&logo=facebook&logoColor=white"
              alt="muhammadalazadheera"
            />
          </a>
        </p>
      </div>

      <div className="w-full h-[1px] border-b border-[#2ea44f] my-[50px]"></div>

      <div id="about-me" >
        <p align="center" className="mb-[30px]">
          <a href="#">
            <img
              src="https://img.shields.io/badge/About-Me-2ea44f?style=for-the-badge"
              alt="About - Me"
            />
          </a>
        </p>

        <p className="text-[#2ea44f]">
          <samp>
            Hello,I am a dedicated and experienced fullstack developer with a
            profound passion for coding. Over the years, I have leveled up my
            skills and expertise, specializing in creating web applications
            like:
            <br />
            <br />
            &gt; Websites
            <br />
            &gt; Single Page Applications (SPAs)
            <br />
            &gt; Business Management Systems
            <br />
            &gt; Software as a Service (SaaS) platforms
            <br />
            &gt; Custom Content Management Systems (CMS)
            <br />
            &gt; Chrome Extensions
            <br />
            &gt; Desktop Applications
            <br />
            &gt; Mobile Applications
            <br />
            &gt; E-commerce Websites
            <br />
            &gt; API Development
            <br />
            &gt; API Integration
            <br />
            <br />
            With a career spanning since 2016, I have had the privilege of
            contributing my talents to various reputable IT firms in Bangladesh,
            where I have played a pivotal role as a Laravel developer. My
            primary focus has been on crafting an array of projects, ranging
            from websites and management software to custom content management
            systems.
            <br />
            <br />
            One key aspect of my approach is my unwavering commitment to honesty
            and transparency. If I encounter a challenge beyond my current
            knowledge, I readily acknowledge it. Nevertheless, my extensive
            experience has taught me the invaluable skill of resourcefulness,
            enabling me to navigate complex problems and find effective
            solutions.
            <br />
            <br />
            Thank you for taking the time to get to know me better. I am eagerly
            anticipating the opportunity to collaborate on your project in the
            near future.
          </samp>
        </p>
      </div>

      <div className="w-full h-[1px] border-b border-[#2ea44f] my-[50px]"></div>

      <div id="languagentools">
        <p align="center">
          <a href="#">
            <img
              src="https://img.shields.io/badge/Language-Tools-2ea44f?style=for-the-badge"
              alt="Language - Tools"
            />
          </a>
        </p>
        <br />

        <samp className="text-[#2ea44f]">
          <h3 align="left">Languages and Tools:</h3>
        </samp>

        <br />
        <samp className="text-[#2ea44f]">- Markup</samp>
        <br />
        <br />

        <p align="left">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=html,css,js,jquery,bootstrap,tailwind" />
          </a>
        </p>

        <br />
        <samp className="text-[#2ea44f]">- Frontend</samp>
        <br />
        <br />

        <p align="left">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=vue,react,next,nuxt" />
          </a>
        </p>

        <br />
        <samp className="text-[#2ea44f]">- Backend</samp>
        <br />
        <br />

        <p align="left">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=php,laravel,nodejs" />
          </a>
        </p>

        <br />
        <samp className="text-[#2ea44f]">- Database</samp>
        <br />
        <br />

        <p align="left">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=mongodb,mysql" />
          </a>
        </p>

        <br />
        <samp className="text-[#2ea44f]">- Cloud Servers</samp>
        <br />
        <br />

        <p align="left">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=firebase" />
          </a>
        </p>

        <br />
        <samp className="text-[#2ea44f]">- Tools</samp>
        <br />
        <br />

        <p align="left">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=github,figma,linux,vscode,postman" />
          </a>
        </p>
      </div>

      <div className="w-full h-[1px] border-b border-[#2ea44f] my-[50px]"></div>

      <div id="my-projects">
        <p align="center">
          <a href="#">
            <img
              src="https://img.shields.io/badge/Recent-Projects-2ea44f?style=for-the-badge"
              alt="Language - Tools"
            />
          </a>
        </p>
        <br />
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-x-3">
          {projects.map((project) => {
            return (
              <div className="card border border-[#2ea44f8f]">
                <figure className="px-4 pt-4">
                  <img className="rounded-lg" src={project.image} alt="Shoes" />
                </figure>
                <div className="card-body text-[#2ea44f]">
                  <h2 className="card-title">
                    <samp>{project.name}</samp>
                  </h2>
                  <p className="mb-2">
                    <samp>
                      {project.description.length > 90
                        ? project.description.slice(0, 90) + "…"
                        : project.description}
                    </samp>
                  </p>
                  <Link target="_blank" to={`project-details/${project.id}`} className="btn btn-sm bg-transparent outline text-[#2ea44f] outline-[#2ea44f8f] rounded-lg">
                    <samp>Details</samp>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full h-[1px] border-b border-[#2ea44f] my-[50px]"></div>

      <div id="github-stats">
        <p align="center" className="mb-[30px]">
          <a href="#">
            <img
              src="https://img.shields.io/badge/Github-stats-2ea44f?style=for-the-badge"
              alt="Github - Stats"
            />
          </a>
        </p>
        <p align="center">
          <a href="https://github.com/anuraghazra/github-readme-stats">
            <img
              width="45%"
              className="img"
              alt="DenverCoder1's Github Stats"
              src="https://denvercoder1-github-readme-stats.vercel.app/api/?username=muhammadalazadheera&show_icons=true&include_all_commits=true&count_private=true&theme=react&hide_border=false&bg_color=1F222E&title_color=2ea44f&icon_color=F8D866"
            />
          </a>
          <br></br>
          <a href="https://github.com/DenverCoder1/github-readme-streak-stats">
            <img
              width="45%"
              className="img"
              title="🔥 Get streak stats for your profile at git.io/streak-stats"
              alt="DenverCoder1's streak"
              src="https://streak-stats.demolab.com/?user=muhammadalazadheera&theme=monokai-metallian&hide_border=false"
            />
          </a>
        </p>

        <br />

        <a href="https://github.com/ashutosh00710/github-readme-activity-graph">
          <img
            className="mx-auto"
            width="65%"
            src="https://github-readme-activity-graph.vercel.app/graph/?username=muhammadalazadheera&bg_color=1F222E&color=2ea44f&line=2ea44f&point=FFFFFF&hide_border=false"
          />
        </a>
      </div>

      <div className="w-full h-[1px] border-b border-[#2ea44f] my-[50px]"></div>

      <footer className="mt-[50px]">
        <p align="center" className="mb-[30px]">
          <a href="#">
            <img
              src="https://img.shields.io/badge/contact-info-2ea44f?style=for-the-badge"
              alt="contact - info"
            />
          </a>
        </p>
        <div className="grid grid-cols-2 items-center">
          <div className="">
            <samp className="text-[#2ea44f] text-lg shadow-sm">
              <p className="text-2xl">Al Azad Heera</p>
              <p>
                <b>Email: </b>
                <a href="mailto:alazadheera@gamil.com">alazadheera@gmail.com</a>
              </p>
              <p>
                <b>Whatsapp: </b>+8801755339711
              </p>
            </samp>
          </div>
          <div className="">
            <p className="text-center text-lg text-[#2ea44f] mb-2">
              <samp className="">Catch Me On Social Sites</samp>
            </p>

            <p align="center">
              <a
                href="https://linkedin.com/in/muhammadalazadheera"
                target="_blank"
              >
                <img
                  className="inline-block md:mx-1 m-1 md:m-0"
                  src="https://img.shields.io/badge/LinkedIn-2ea44f?style=for-the-badge&logo=linkedin&logoColor=white"
                  alt="alsiam"
                />
              </a>
              <a
                href="https://linkedin.com/in/muhammadalazadheera"
                target="_blank"
              >
                <img
                  className="inline-block md:mx-1 m-1 md:m-0"
                  src="https://img.shields.io/badge/Github-2ea44f?style=for-the-badge&logo=github&logoColor=white"
                  alt="alsiam"
                />
              </a>
              <a
                href="https://linkedin.com/in/muhammadalazadheera"
                target="_blank"
              >
                <img
                  className="inline-block md:mx-1 m-1 md:m-0"
                  src="https://img.shields.io/badge/Facebook-2ea44f?style=for-the-badge&logo=facebook&logoColor=white"
                  alt="alsiam"
                />
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
