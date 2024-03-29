import { ProjectData } from "@/types";
import ProjectCard from "../components/ProjectCard";
import { sanity } from "../lib/sanity";

async function getProjects() {
  const query = `*[ _type == "project"]{
    name,
    description,
    _id,
    "imageUrl":image.asset->url,
    githubURL,
    projectURL,
    technologies,
    deployed
  }`;

  const data = await sanity.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

const Projects = async () => {
  const data: ProjectData[] = await getProjects();

  return (
    <section className="p-6 max-w-[1000px] mx-auto" id="projects">
      <h1 className="text-4xl mb-5 lg:mt-[40px] lg:mb-[30px] text-blue-600">
        Projects
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.map((project) => (
          <ProjectCard key={project._id} projectData={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
