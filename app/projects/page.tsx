import { client } from "../lib/sanity";

interface ProjectData {
  name: string;
  description: string;
  link: string;
  _id: string;
  imageUrl: string;
}

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

  console.log(data);

  return (
    <section className="p-6 max-w-[1000px] mx-auto h-screen">
      <h1 className="text-4xl mb-5 lg:mt-[40px] lg:mb-[30px] text-blue-600">
        Projects
      </h1>
      <div></div>
    </section>
  );
};

export default Projects;
