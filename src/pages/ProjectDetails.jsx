import { useState, useEffect } from "react";
import { useParams } from "react-router";

function ProjectDetails() {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const project = data.find((project) => project.id == id);
        setProject(project);
      });
  }, []);
  return (
    <div className="w-[95%] md:w-[85%] mx-auto p-[20px] text-[#2ea44f]">
      <div className="bitcount mt-5 mb-10">
        <h1 className="text-5xl text-center text-[#2ea44f]">Project Details</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <img
            className="w-full outline outline-[#2ea44f] outline-offset-4"
            src={project.image}
            alt=""
          />
        </div>
        <div className="px-6">
          <p className="mb-2 capitalize">
            <samp>
              <b className="underline">Name: </b>
              <br />
              {project.name}
            </samp>
          </p>
          <p className="mb-2">
            <samp>
              <b className="underline">Description: </b>
              <br />
              {project.description}
            </samp>
          </p>
          <p className="mb-4">
            <samp>
              <b className="underline">Technologies: </b>
              <br />
              {project.technologies?.map((technology) => {
                return (
                  <div className="capitalize badge outline outline-[#2ea44f] text-[#2ea44f] mt-1 mr-2">
                    {technology}
                  </div>
                );
              })}
            </samp>
          </p>
          <p className="mb-2">
            <samp>
              <b className="underline">Challenges: </b>
              <br />
              {project.challenges}
            </samp>
          </p>
          <p className="mb-2">
            <samp>
              <b className="underline">Live Link: </b>
              <br />
              <a target="_blank" href={project.link}>
                {project.link} &#8599;
              </a>
            </samp>
          </p>
          <p className="mb-2">
            <samp>
              <b className="underline">Github Repo: </b>
              <br />
              <a target="_blank" href={project.repo}>
                {project.repo} &#8599;
              </a>
            </samp>
          </p>
          <p className="mb-2">
            <samp>
              <b className="underline">Upcoming Features: </b>
              <br />
              {project.improvements}
            </samp>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
