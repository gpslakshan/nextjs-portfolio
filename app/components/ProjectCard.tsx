import { ProjectData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  projectData: ProjectData;
}

const ProjectCard = ({ projectData }: Props) => {
  return (
    <div className="shadow-lg p-3 bg-slate-200 rounded-lg flex flex-col justify-center items-center w-full">
      <div className="mb-1 w-full relative h-[170px]">
        <Link href={`projects/${projectData._id}`}>
          <Image
            src={projectData.imageUrl}
            alt={projectData.name}
            fill
            className="object-cover"
          />
        </Link>
      </div>
      <div className="mb-2">{projectData.name}</div>
      <div className="flex flex-row items-center space-x-3">
        <Link href={projectData.githubURL} target="_blank">
          <FaGithub size="20" />
        </Link>
        {projectData.deployed && (
          <Link href={projectData.projectURL || ""} target="_blank">
            <FaExternalLinkAlt />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
