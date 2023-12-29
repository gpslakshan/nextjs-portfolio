import { ProjectData } from "@/types";
import ProjectCard from "../components/ProjectCard";
import { client } from "../lib/sanity";

export const revalidate = 10; // revalidate this page every 10 seconds

async function getProjects() {
  const query = `*[ _type == "project"]{
    name,
      description,
      link,
      _id,
      "imageUrl":image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

const Projects = async () => {
  const data: ProjectData[] = await getProjects();

  return (
    <section className="p-6 max-w-[1000px] mx-auto h-screen">
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
