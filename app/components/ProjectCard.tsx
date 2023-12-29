import { ProjectData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

interface Props {
  projectData: ProjectData;
}

const ProjectCard = ({ projectData }: Props) => {
  return (
    <div className="shadow-lg p-3 bg-slate-200 rounded-lg flex flex-col justify-center items-center w-full">
      <div className="mb-2">
        <Image
          src={projectData.imageUrl}
          alt={projectData.name}
          width={300}
          height={170}
        />
      </div>
      <div className="mb-2">{projectData.name}</div>
      <Link href={projectData.link} target="_blank">
        <FaGithub size="20" />
      </Link>
    </div>
  );
};

export default ProjectCard;
