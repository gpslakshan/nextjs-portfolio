import { SkillData } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  skillData: SkillData;
}

const SkillCard = ({ skillData }: Props) => {
  return (
    <div className="shadow-lg p-3 bg-slate-200 rounded-lg flex flex-col justify-center items-center w-full">
      <div className="mb-1 w-full relative h-[170px]">
        <Image
          src={skillData.imageUrl}
          alt={skillData.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="mb-2">{skillData.name}</div>
    </div>
  );
};

export default SkillCard;
