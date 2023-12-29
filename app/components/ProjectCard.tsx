import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectData {
  name: string;
  description: string;
  link: string;
  _id: string;
  imageUrl: string;
}

interface Props {
  projectData: ProjectData;
}

const ProjectCard = ({ projectData }: Props) => {
  return (
    <div className="shadow-lg mb-3 p-3 bg-slate-200 rounded-lg flex flex-col justify-center items-center w-full">
      <div className="mb-2">
        <Image
          src={projectData.imageUrl}
          alt={projectData.name}
          width={300}
          height={170}
        />
      </div>
      <div className="mb-2">{projectData.name}</div>
      <FaGithub size="20" />
    </div>
  );
};

export default ProjectCard;
