import { ProjectData } from "@/types";
import { sanity } from "../../lib/sanity";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

interface Props {
  params: { id: string };
}

async function getProjectById(id: string) {
  console.log(id);
  const query = `*[ _type == "project" && _id == "${id}"]{
    name,
    description,
    _id,
    "imageUrl":image.asset->url,
    githubURL,
    projectURL,
    technologies,
    deployed
  }`;

  const project = await sanity.fetch(query);

  return project[0];
}

const ProjectDetailsPage = async ({ params }: Props) => {
  const project: ProjectData = await getProjectById(params.id);

  return (
    <div className="min-h-screen max-w-[1000px] p-6 mx-auto">
      <h1 className="mb-2">{project.name}</h1>
      <div className="w-full h-[170px] mb-2 relative">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-contain"
        />
      </div>
      <p className="mb-6">{project.description}</p>
      <div className="font-bold">Techonologies used:</div>
      <ul className="list-disc pl-8 mb-6">
        {project.technologies.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="flex flex-row space-x-3 mb-2">
        <div>Github URL: </div>
        <Link href={project.githubURL} target="_blank">
          <FaGithub size="20" />
        </Link>
      </div>
      <div className="flex flex-row space-x-3 mb-2">
        {project.deployed && <div>Deployed URL: </div>}
        {project.deployed && (
          <Link href={project.projectURL || ""} target="_blank">
            <FaExternalLinkAlt />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
